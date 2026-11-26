import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k4xah3b6c.css';
import '../../css/w/whl43ccdj.css';
import '../../css/k/kihtoab6b.css';

const viewBox = {"width":840,"height":840};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="k4xah3b6c"/><path class="whl43ccdj"/><path class="kihtoab6b"/></g>`,
		"fallback": "thesvg-color:seus-community",
	});
}

export default Component;
