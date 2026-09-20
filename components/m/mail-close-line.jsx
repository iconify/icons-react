import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m77e_vbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m77e_vbxh"/>`,
		"fallback": "ri:mail-close-line",
	});
}

export default Component;
