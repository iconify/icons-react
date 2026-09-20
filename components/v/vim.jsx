import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfygh5brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfygh5brw"/>`,
		"fallback": "thesvg:vim",
	});
}

export default Component;
