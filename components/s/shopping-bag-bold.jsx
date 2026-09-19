import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/u/ure5rybbd.css';
import '../../css/i/i-nfk4xyp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="ure5rybbd"/><path class="i-nfk4xyp"/></g>`,
		"fallback": "glyphs:shopping-bag-bold",
	});
}

export default Component;
