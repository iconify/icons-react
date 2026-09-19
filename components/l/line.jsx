import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jys3kyvgo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jys3kyvgo"/>`,
		"fallback": "fluent-mdl2:line",
	});
}

export default Component;
