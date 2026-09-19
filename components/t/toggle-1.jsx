import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/low48muva.css';
import '../../css/v/vg2o4-bop.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="low48muva"/><path class="vg2o4-bop"/></g>`,
		"fallback": "glyphs:toggle-1",
	});
}

export default Component;
