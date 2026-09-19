import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vj8upp40p.css';
import '../../css/s/sl84xe35m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vj8upp40p"/><path class="sl84xe35m"/></g>`,
		"fallback": "glyphs:share-duo",
	});
}

export default Component;
