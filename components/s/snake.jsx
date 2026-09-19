import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ew1t2fbjf.css';
import '../../css/i/i72j3vhdk.css';
import '../../css/v/vzk6dmbmr.css';
import '../../css/o/o48txrndz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ew1t2fbjf"/><path class="i72j3vhdk"/><path class="vzk6dmbmr"/><path class="o48txrndz"/></g>`,
		"fallback": "fluent-emoji-flat:snake",
	});
}

export default Component;
