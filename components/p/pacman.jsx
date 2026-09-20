import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/ppfqpdbkh.css';
import '../../css/v/vpiqi8bwq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ppfqpdbkh"/><path class="vpiqi8bwq"/></g>`,
		"fallback": "streamline:pacman",
	});
}

export default Component;
