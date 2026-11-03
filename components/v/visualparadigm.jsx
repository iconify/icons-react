import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc2q2zbzh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc2q2zbzh"/>`,
		"fallback": "devicon:visualparadigm",
	});
}

export default Component;
