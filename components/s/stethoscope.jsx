import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1be_gbmb.css';
import '../../css/u/u-j5qhx3m.css';
import '../../css/o/oa6ouwivw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n1be_gbmb"/><path class="u-j5qhx3m"/><path class="oa6ouwivw"/></g>`,
		"fallback": "fluent-emoji-flat:stethoscope",
	});
}

export default Component;
