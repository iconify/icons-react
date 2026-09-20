import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-l74qbar.css';
import '../../css/h/ho4576bki.css';
import '../../css/u/ur7kcdbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-l74qbar"/><path class="ho4576bki"/><path class="ur7kcdbqf"/></g>`,
		"fallback": "tdesign:lighthouse-2",
	});
}

export default Component;
