import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3cll2epf.css';
import '../../css/w/w-wp2mbeb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3cll2epf"/><path class="w-wp2mbeb"/>`,
		"fallback": "devicon:typescript",
	});
}

export default Component;
