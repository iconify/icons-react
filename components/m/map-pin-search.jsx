import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iip00-5-u.css';
import '../../css/h/hjri0rbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iip00-5-u"/><path class="hjri0rbby"/></g>`,
		"fallback": "vadivam:map-pin-search",
	});
}

export default Component;
