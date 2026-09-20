import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inbsb8b-e.css';
import '../../css/u/uiypogtcm.css';
import '../../css/m/mp6nn9g5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="inbsb8b-e"/><path class="uiypogtcm"/><path class="mp6nn9g5s"/></g>`,
		"fallback": "tdesign:logo-markdown",
	});
}

export default Component;
