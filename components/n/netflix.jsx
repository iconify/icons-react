import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1tev6ybj.css';
import '../../css/n/nqec1c1ia.css';
import '../../css/k/kte34l_7e.css';
import '../../css/c/cvhw_bdua.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g1tev6ybj"/><path class="nqec1c1ia"/><path class="kte34l_7e"/><path class="cvhw_bdua"/></g>`,
		"fallback": "streamline-color:netflix",
	});
}

export default Component;
