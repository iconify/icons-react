import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_js2bbac.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_js2bbac"/>`,
		"fallback": "fluent-mdl2:manufacturing",
	});
}

export default Component;
