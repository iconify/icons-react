import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdee2rzxp.css';
import '../../css/y/yzq0i0b1u.css';
import '../../css/s/sd69p3baz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qdee2rzxp"/><path class="yzq0i0b1u"/><path class="sd69p3baz"/></g>`,
		"fallback": "glyphs:pills-duo",
	});
}

export default Component;
