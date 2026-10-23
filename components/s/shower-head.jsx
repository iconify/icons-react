import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mww64c6yu.css';
import '../../css/h/hqrzb4bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mww64c6yu"/><path class="hqrzb4bbz"/></g>`,
		"fallback": "vadivam:shower-head",
	});
}

export default Component;
