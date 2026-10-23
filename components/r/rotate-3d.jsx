import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d1879nbgx.css';
import '../../css/c/ciz2e2bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d1879nbgx"/><path class="ciz2e2bfh"/></g>`,
		"fallback": "vadivam:rotate-3d",
	});
}

export default Component;
