import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cbay_mbbl.css';
import '../../css/k/kb4o8e-ai.css';
import '../../css/k/kzxllvf1v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cbay_mbbl"/><path class="kb4o8e-ai"/><path class="kzxllvf1v"/></g>`,
		"fallback": "glyphs:polaroid",
	});
}

export default Component;
