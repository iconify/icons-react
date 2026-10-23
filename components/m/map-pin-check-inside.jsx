import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zg448ubtr.css';
import '../../css/v/ve0cvubdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zg448ubtr"/><path class="ve0cvubdh"/></g>`,
		"fallback": "vadivam:map-pin-check-inside",
	});
}

export default Component;
