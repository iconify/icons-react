import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d65b-8b0p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d65b-8b0p"/>`,
		"fallback": "cryptocurrency:oxt",
	});
}

export default Component;
