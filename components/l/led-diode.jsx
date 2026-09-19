import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f32n5-7hk.css';
import '../../css/h/hu6m7zbrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="f32n5-7hk"/><circle class="hu6m7zbrv"/></g>`,
		"fallback": "icon-park-outline:led-diode",
	});
}

export default Component;
