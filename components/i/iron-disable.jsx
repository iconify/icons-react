import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/rx43e1bfa.css';
import '../../css/v/vlgv0-bvw.css';
import '../../css/h/hq5fx08et.css';
import '../../css/c/cqhxeabme.css';
import '../../css/h/hyphcb90v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="rx43e1bfa"/><path class="vlgv0-bvw"/><circle class="hq5fx08et"/><path class="cqhxeabme"/><path class="hyphcb90v"/></g>`,
		"fallback": "icon-park:iron-disable",
	});
}

export default Component;
