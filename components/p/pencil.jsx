import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r9-_mzbbk.css';
import '../../css/v/v2h1vab2o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="r9-_mzbbk"/><path class="v2h1vab2o"/></g>`,
		"fallback": "glyphs:pencil",
	});
}

export default Component;
