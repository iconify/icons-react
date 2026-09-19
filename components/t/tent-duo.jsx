import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxa8muzrd.css';
import '../../css/o/olpi3qujl.css';
import '../../css/a/a1myf2bxc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dxa8muzrd"/><path class="olpi3qujl"/><path class="a1myf2bxc"/></g>`,
		"fallback": "glyphs:tent-duo",
	});
}

export default Component;
