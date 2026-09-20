import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s52jt_b2a.css';
import '../../css/f/f3_milowf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s52jt_b2a"/><path class="f3_milowf"/></g>`,
		"fallback": "keyline-icons:sun-two-tone",
	});
}

export default Component;
