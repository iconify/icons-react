import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js7pf5byf.css';
import '../../css/i/iv3gg9_op.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js7pf5byf"/><path class="iv3gg9_op"/>`,
		"fallback": "devicon:tailwindcss-wordmark",
	});
}

export default Component;
