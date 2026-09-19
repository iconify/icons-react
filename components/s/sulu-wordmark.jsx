import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy5l9cc_i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy5l9cc_i"/>`,
		"fallback": "devicon:sulu-wordmark",
	});
}

export default Component;
