import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lppvp4b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lppvp4b4x"/>`,
		"fallback": "pixelarticons:netlify",
	});
}

export default Component;
