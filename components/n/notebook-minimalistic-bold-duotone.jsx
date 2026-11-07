import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5rfkzb2n.css';
import '../../css/x/xp2l2gs6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n5rfkzb2n"/><path class="xp2l2gs6v"/>`,
		"fallback": "solar:notebook-minimalistic-bold-duotone",
	});
}

export default Component;
