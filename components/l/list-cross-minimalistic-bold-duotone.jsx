import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_yo8lb1d.css';
import '../../css/b/bktm07box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_yo8lb1d"/><path class="bktm07box"/>`,
		"fallback": "solar:list-cross-minimalistic-bold-duotone",
	});
}

export default Component;
