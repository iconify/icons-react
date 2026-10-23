import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hcgck3pjz.css';
import '../../css/p/pszgemu3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hcgck3pjz"/><path class="pszgemu3s"/></g>`,
		"fallback": "vadivam:rotate-cw-fading-clock",
	});
}

export default Component;
