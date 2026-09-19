import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0_ywmbfa.css';

const viewBox = {"width":154,"height":767};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0_ywmbfa"/>`,
		"fallback": "ls:semicolon",
	});
}

export default Component;
