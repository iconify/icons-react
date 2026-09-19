import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxet6lfrt.css';
import '../../css/w/wnir0lvso.css';
import '../../css/d/d7yumb3px.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxet6lfrt"/><path class="wnir0lvso"/><path class="d7yumb3px"/>`,
		"fallback": "fxemoji:waningcrescentmoon",
	});
}

export default Component;
