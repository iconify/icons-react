import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zg448ubtr.css';
import '../../css/w/wzxk12bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zg448ubtr"/><path class="wzxk12bdj"/></g>`,
		"fallback": "vadivam:map-pin",
	});
}

export default Component;
