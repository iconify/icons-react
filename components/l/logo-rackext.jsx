import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qw3cs8ayj.css';
import '../../css/i/iqhend93h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qw3cs8ayj"/><path class="iqhend93h"/></g>`,
		"fallback": "fad:logo-rackext",
	});
}

export default Component;
