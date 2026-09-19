import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vdylckbjl.css';
import '../../css/s/sg_jh5bes.css';
import '../../css/a/aeiq-e9ld.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vdylckbjl"/><path class="sg_jh5bes"/><path class="aeiq-e9ld"/></g>`,
		"fallback": "glyphs:layer-foward",
	});
}

export default Component;
