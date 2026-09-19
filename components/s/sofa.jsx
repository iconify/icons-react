import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wmsfadbmr.css';
import '../../css/f/fs83lhbaw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wmsfadbmr"/><path class="fs83lhbaw"/></g>`,
		"fallback": "glyphs:sofa",
	});
}

export default Component;
