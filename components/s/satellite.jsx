import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kgugpibha.css';
import '../../css/o/os5b4vbrt.css';
import '../../css/s/sj1g9qbqm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kgugpibha"/><path class="os5b4vbrt"/><path class="sj1g9qbqm"/></g>`,
		"fallback": "glyphs:satellite",
	});
}

export default Component;
