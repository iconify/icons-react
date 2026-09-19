import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz-xk656g.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz-xk656g"/>`,
		"fallback": "fluent-mdl2:numbered-list-number",
	});
}

export default Component;
