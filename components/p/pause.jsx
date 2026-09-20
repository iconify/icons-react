import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f23o3mbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f23o3mbxg"/>`,
		"fallback": "mdi-light:pause",
	});
}

export default Component;
