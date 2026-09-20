import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/n/n_v01xbfu.css';
import '../../css/q/qbx1o_bnf.css';
import '../../css/z/z66qchbkr.css';
import '../../css/o/ofkw06_jl.css';

const viewBox = {"width":95.1,"height":74.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="n_v01xbfu"/><ellipse class="qbx1o_bnf"/><path class="z66qchbkr"/><path class="ofkw06_jl"/></g>`,
		"fallback": "thesvg-color:kroger",
	});
}

export default Component;
