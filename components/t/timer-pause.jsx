import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hoqg9vbdg.css';
import '../../css/k/ke7d84ibd.css';
import '../../css/w/wq2wc4bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hoqg9vbdg"/><path class="ke7d84ibd"/><path class="wq2wc4bco"/></g>`,
		"fallback": "reicon:timer-pause",
	});
}

export default Component;
