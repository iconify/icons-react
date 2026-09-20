import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hkmmighke.css';
import '../../css/g/gzue5abyy.css';
import '../../css/m/m4pb00bvr.css';
import '../../css/a/akncx2b7j.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="hkmmighke"/><path class="gzue5abyy"/><path class="m4pb00bvr"/><path class="akncx2b7j"/></g>`,
		"fallback": "marketeq:music-file-2",
	});
}

export default Component;
