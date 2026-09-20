import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs097sx9w.css';
import '../../css/h/hjoxasqzl.css';
import '../../css/a/a3esp_bqf.css';
import '../../css/k/k7ktcccae.css';

const viewBox = {"width":328,"height":319};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gs097sx9w"><path class="hjoxasqzl"/><path class="a3esp_bqf"/><path class="k7ktcccae"/></g>`,
		"fallback": "thesvg-color:soldera-light",
	});
}

export default Component;
