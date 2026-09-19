import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9_6bmb7k.css';
import '../../css/e/ebvmgs0jk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9_6bmb7k"/><path class="ebvmgs0jk"/>`,
		"fallback": "devicon:scalingo",
	});
}

export default Component;
