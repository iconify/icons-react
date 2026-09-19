import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlih9fbec.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlih9fbec"/>`,
		"fallback": "cryptocurrency:powr",
	});
}

export default Component;
