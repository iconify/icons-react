import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzwg3_boa.css';
import '../../css/y/yyposl7cp.css';
import '../../css/i/ijz7pfd4y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzwg3_boa"/><path class="yyposl7cp"/><path class="ijz7pfd4y"/>`,
		"fallback": "energy-icons:solar-street-light-20",
	});
}

export default Component;
