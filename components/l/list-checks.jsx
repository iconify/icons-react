import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/chm-v8b3e.css';
import '../../css/s/ssmicowcj.css';
import '../../css/c/ctem6tbeu.css';
import '../../css/j/jkywunwjt.css';
import '../../css/f/f77j-gbdo.css';
import '../../css/a/aaz9bkb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="chm-v8b3e"/><path class="ssmicowcj"/><path class="ctem6tbeu"/><path class="jkywunwjt"/><path class="f77j-gbdo"/><path class="aaz9bkb1p"/></g>`,
		"fallback": "matita:list-checks",
	});
}

export default Component;
