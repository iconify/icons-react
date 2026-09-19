import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kn_ukjevf.css';
import '../../css/w/wiy2jbdie.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kn_ukjevf"/><path class="wiy2jbdie"/></g>`,
		"fallback": "fluent-emoji-flat:raised-back-of-hand-light",
	});
}

export default Component;
