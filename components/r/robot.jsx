import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k-y9zgp3c.css';
import '../../css/e/ebpla5b_i.css';
import '../../css/b/brg541bpm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k-y9zgp3c"/><path class="ebpla5b_i"/><path class="brg541bpm"/></g>`,
		"fallback": "glyphs:robot",
	});
}

export default Component;
