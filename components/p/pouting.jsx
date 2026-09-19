import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-xk_ruej.css';
import '../../css/y/yiz97dbjs.css';
import '../../css/l/ldaz7_bsh.css';
import '../../css/h/h2s924byy.css';
import '../../css/g/g07dr6bbn.css';
import '../../css/n/nndxyclzt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-xk_ruej"/><path class="yiz97dbjs"/><path class="ldaz7_bsh"/><path class="h2s924byy"/><path class="g07dr6bbn"/><path class="nndxyclzt"/>`,
		"fallback": "fxemoji:pouting",
	});
}

export default Component;
