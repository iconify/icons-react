import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pfbwf-bvy.css';
import '../../css/a/a-5rc9ati.css';
import '../../css/i/i77vq2b6o.css';
import '../../css/j/jibe7abtl.css';
import '../../css/m/mw1p3sb5m.css';
import '../../css/h/he8eo_cit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pfbwf-bvy"/><path class="a-5rc9ati"/><path class="i77vq2b6o"/><path class="jibe7abtl"/><path class="mw1p3sb5m"/><path class="he8eo_cit"/></g>`,
		"fallback": "iconaut:owl",
	});
}

export default Component;
