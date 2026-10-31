import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6um43blt.css';
import '../../css/j/jl0rb9bkk.css';
import '../../css/r/ryb4pfb7y.css';
import '../../css/t/tlq70tbdd.css';
import '../../css/d/d56xmhbce.css';
import '../../css/b/bmmjz2lze.css';
import '../../css/g/gizemubyp.css';
import '../../css/w/wldrfjbgb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6um43blt"/><path class="jl0rb9bkk"/><path class="ryb4pfb7y"/><path class="tlq70tbdd"/><path class="d56xmhbce"/><path class="bmmjz2lze"/><path class="gizemubyp"/><path class="wldrfjbgb"/>`,
		"fallback": "iconito:mayonnaise",
	});
}

export default Component;
