import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op8whfb1w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op8whfb1w"/>`,
		"fallback": "fluent-mdl2:react-logo",
	});
}

export default Component;
