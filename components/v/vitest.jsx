import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7yr2gb8r.css';
import '../../css/i/if9yuik-y.css';
import '../../css/g/g3e_4lbfn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7yr2gb8r"/><path class="if9yuik-y"/><path class="g3e_4lbfn"/>`,
		"fallback": "devicon:vitest",
	});
}

export default Component;
