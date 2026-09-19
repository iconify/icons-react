import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xec58ci5x.css';
import '../../css/k/kuo1ytbsw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xec58ci5x"/><path class="kuo1ytbsw"/></g>`,
		"fallback": "glyphs:link-1",
	});
}

export default Component;
