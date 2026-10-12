import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiq4byboj.css';
import '../../css/y/y314rdblj.css';
import '../../css/f/fwfducc9s.css';
import '../../css/m/mfnsgnmug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iiq4byboj"/><path class="y314rdblj"/><path class="fwfducc9s"/><path class="mfnsgnmug"/></g>`,
		"fallback": "andrsrxn:speedometer",
	});
}

export default Component;
