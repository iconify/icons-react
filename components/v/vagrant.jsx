import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj4p5eb8q.css';
import '../../css/n/nm2y6cbuf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj4p5eb8q"/><path class="nm2y6cbuf"/>`,
		"fallback": "devicon:vagrant",
	});
}

export default Component;
