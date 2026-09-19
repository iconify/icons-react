import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ex_avpbej.css';
import '../../css/t/trdt80b2a.css';
import '../../css/d/d8m1e2myi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ex_avpbej"/><path class="trdt80b2a"/><path class="d8m1e2myi"/></g>`,
		"fallback": "iconoir:wallet",
	});
}

export default Component;
