import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uhg1i7brs.css';
import '../../css/g/gyp_jrbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uhg1i7brs"/><path class="gyp_jrbdc"/></g>`,
		"fallback": "vadivam:shuffle",
	});
}

export default Component;
