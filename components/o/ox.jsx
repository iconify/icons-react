import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6s8ybbso.css';
import '../../css/q/qx0nqxrzi.css';
import '../../css/d/dyfw7omlw.css';
import '../../css/u/upuwgobaq.css';
import '../../css/t/tzsh98byc.css';
import '../../css/f/f2l5prbdc.css';
import '../../css/a/a2xun23om.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6s8ybbso"/><path class="qx0nqxrzi"/><path class="dyfw7omlw"/><path class="upuwgobaq"/><path class="tzsh98byc"/><path class="f2l5prbdc"/><path class="a2xun23om"/>`,
		"fallback": "fxemoji:ox",
	});
}

export default Component;
