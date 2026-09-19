import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ltrfubbro.css';
import '../../css/a/a7s1jvk0c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ltrfubbro"/><path class="a7s1jvk0c"/></g>`,
		"fallback": "devicon:neo4j",
	});
}

export default Component;
