import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmoj0pv_m.css';
import '../../css/i/iuvjulbnr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmoj0pv_m"/><path class="iuvjulbnr"/>`,
		"fallback": "selfhst:patzer-light",
	});
}

export default Component;
