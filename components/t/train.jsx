import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqsfi3h_c.css';
import '../../css/o/odagib8gx.css';
import '../../css/v/v8a3itb2d.css';
import '../../css/h/hvh-41bsq.css';
import '../../css/p/pmexm0tfy.css';
import '../../css/f/f-24nviip.css';
import '../../css/a/a9lrpnb-c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iqsfi3h_c"/><path class="odagib8gx"/><path class="v8a3itb2d"/><path class="hvh-41bsq"/><path class="pmexm0tfy"/><path class="f-24nviip"/><path class="a9lrpnb-c"/></g>`,
		"fallback": "fluent-emoji-flat:train",
	});
}

export default Component;
