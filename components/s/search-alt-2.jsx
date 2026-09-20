import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jl39q2g0i.css';
import '../../css/o/oy0e--gjn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jl39q2g0i"/><path class="oy0e--gjn"/></g>`,
		"fallback": "marketeq:search-alt-2",
	});
}

export default Component;
