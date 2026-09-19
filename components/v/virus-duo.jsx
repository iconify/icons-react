import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpnctqbli.css';
import '../../css/r/r34dniyfc.css';
import '../../css/x/xm7b40bmo.css';
import '../../css/n/n2xfujbvx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qpnctqbli"/><path class="r34dniyfc"/><path clip-rule="evenodd" class="xm7b40bmo"/><path class="n2xfujbvx"/></g>`,
		"fallback": "glyphs:virus-duo",
	});
}

export default Component;
