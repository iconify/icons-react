import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk6pgjbrj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk6pgjbrj"/>`,
		"fallback": "fluent-emoji-high-contrast:roasted-sweet-potato",
	});
}

export default Component;
