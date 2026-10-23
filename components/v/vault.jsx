import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/stuuapsxa.css';
import '../../css/l/l65-_5kig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="stuuapsxa"/><path class="l65-_5kig"/></g>`,
		"fallback": "vadivam:vault",
	});
}

export default Component;
