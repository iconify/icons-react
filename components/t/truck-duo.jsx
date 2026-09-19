import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm0g03ory.css';
import '../../css/c/c3yk-nbbq.css';
import '../../css/o/ozqsb-b4p.css';
import '../../css/j/jcgz6bcws.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pm0g03ory"/><path class="c3yk-nbbq"/><path class="ozqsb-b4p"/><path class="jcgz6bcws"/></g>`,
		"fallback": "glyphs:truck-duo",
	});
}

export default Component;
