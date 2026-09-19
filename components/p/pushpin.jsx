import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt0xhaboe.css';
import '../../css/i/ibygdfo4w.css';
import '../../css/x/xc__svjwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt0xhaboe"/><path class="ibygdfo4w"/><path class="xc__svjwh"/>`,
		"fallback": "fxemoji:pushpin",
	});
}

export default Component;
