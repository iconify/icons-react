import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh2bigb3y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh2bigb3y"/>`,
		"fallback": "devicon:splunk-wordmark",
	});
}

export default Component;
