import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ken7n5e9c.css';
import '../../css/s/sy3-pn_gl.css';
import '../../css/g/gcngc6nkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ken7n5e9c"/><path class="sy3-pn_gl"/><path class="gcngc6nkf"/></g>`,
		"fallback": "streamline-ultimate:power-outlet-type-f",
	});
}

export default Component;
