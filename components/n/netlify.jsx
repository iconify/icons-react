import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq538skyr.css';
import '../../css/i/i54izb3il.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq538skyr"/><path class="i54izb3il"/>`,
		"fallback": "devicon:netlify",
	});
}

export default Component;
