import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fchanpq5s.css';
import '../../css/v/vpzkd9a5o.css';
import '../../css/c/c4i52unkb.css';
import '../../css/p/p7ltjqbth.css';
import '../../css/w/wx_n2ccae.css';
import '../../css/n/n8p01ub1f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fchanpq5s"/><path class="vpzkd9a5o"/><path class="c4i52unkb"/><path class="p7ltjqbth"/><path class="wx_n2ccae"/><path class="n8p01ub1f"/>`,
		"fallback": "devicon:plsql",
	});
}

export default Component;
