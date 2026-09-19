import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvr28lbwy.css';
import '../../css/o/o_uqry8um.css';
import '../../css/n/ncwwddbmt.css';
import '../../css/i/i0zpm4b2k.css';
import '../../css/m/mynjmzs7q.css';
import '../../css/s/s74sd3b4k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvr28lbwy"/><path class="o_uqry8um"/><path class="ncwwddbmt"/><path class="i0zpm4b2k"/><path class="mynjmzs7q"/><path class="s74sd3b4k"/></g>`,
		"fallback": "fluent-emoji-flat:lion",
	});
}

export default Component;
