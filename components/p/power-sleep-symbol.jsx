import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elb82nbbj.css';
import '../../css/a/aewymtpsh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elb82nbbj"/><path class="aewymtpsh"/>`,
		"fallback": "openmoji:power-sleep-symbol",
	});
}

export default Component;
