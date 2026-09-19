import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z982bgb5u.css';
import '../../css/c/cieejvb9y.css';
import '../../css/g/gei8aufil.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z982bgb5u"/><path class="cieejvb9y"/><path class="gei8aufil"/></g>`,
		"fallback": "glyphs:object-group-duo",
	});
}

export default Component;
