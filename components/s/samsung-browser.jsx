import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnikkmjuh.css';
import '../../css/x/x7vysrk2l.css';
import '../../css/q/qh9nnibxp.css';
import '../../css/d/ddytleb_x.css';

const viewBox = {"width":493,"height":493};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnikkmjuh"/><path class="x7vysrk2l"/><path class="qh9nnibxp"/><path class="ddytleb_x"/>`,
		"fallback": "thesvg-color:samsung-browser",
	});
}

export default Component;
