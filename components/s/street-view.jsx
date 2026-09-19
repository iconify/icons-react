import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/heur4iqay.css';
import '../../css/u/u-o27vh5d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="heur4iqay"/><path class="u-o27vh5d"/></g>`,
		"fallback": "glyphs:street-view",
	});
}

export default Component;
