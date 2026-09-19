import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssp_4fbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ssp_4fbfw"/>`,
		"fallback": "iconoir:shortcut-square-solid",
	});
}

export default Component;
