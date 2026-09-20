import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxh_3bcls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxh_3bcls"/>`,
		"fallback": "tdesign:panorama-horizontal-filled",
	});
}

export default Component;
