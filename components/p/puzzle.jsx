import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mj_tqmb9g.css';
import '../../css/l/loyg9l91u.css';
import '../../css/q/q85lzdbct.css';
import '../../css/d/dpj4gbi2o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mj_tqmb9g"/><path class="loyg9l91u"/><path class="q85lzdbct"/><path class="dpj4gbi2o"/></g>`,
		"fallback": "glyphs:puzzle",
	});
}

export default Component;
