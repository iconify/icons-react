import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1dmdcbbg.css';
import '../../css/p/p0-rcccen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g1dmdcbbg"/><ellipse class="p0-rcccen"/></g>`,
		"fallback": "akar-icons:trash-bin",
	});
}

export default Component;
