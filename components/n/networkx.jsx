import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcmvy2ouf.css';
import '../../css/r/rxbeq-blz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcmvy2ouf"/><path class="rxbeq-blz"/>`,
		"fallback": "devicon:networkx",
	});
}

export default Component;
