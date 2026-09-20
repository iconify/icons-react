import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wni-iwmyk.css';
import '../../css/z/zfnegqb9h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wni-iwmyk"/><path class="zfnegqb9h"/></g>`,
		"fallback": "streamline-color:serving-dome",
	});
}

export default Component;
