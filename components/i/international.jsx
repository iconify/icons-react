import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/m/mfaj5_b9w.css';
import '../../css/d/dmx9fugvp.css';
import '../../css/h/hi6vwvbkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="mfaj5_b9w"/><path class="dmx9fugvp"/><path class="hi6vwvbkm"/></g>`,
		"fallback": "icon-park:international",
	});
}

export default Component;
