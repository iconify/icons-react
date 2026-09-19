import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n236_6b9r.css';
import '../../css/z/zob53cqqm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n236_6b9r"/><path class="zob53cqqm"/></g>`,
		"fallback": "glyphs:school-bus",
	});
}

export default Component;
