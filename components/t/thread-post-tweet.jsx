import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fuo_uxhen.css';
import '../../css/k/kzirggbni.css';
import '../../css/q/qbyu46zlw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fuo_uxhen"/><path class="kzirggbni"/><path class="qbyu46zlw"/></g>`,
		"fallback": "streamline-flex-color:thread-post-tweet",
	});
}

export default Component;
