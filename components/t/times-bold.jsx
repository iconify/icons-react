import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/w/wbf1jl94t.css';
import '../../css/g/gz1qx8bxy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="wbf1jl94t"/><path class="gz1qx8bxy"/></g>`,
		"fallback": "glyphs:times-bold",
	});
}

export default Component;
