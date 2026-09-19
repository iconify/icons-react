import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugaw_y7eu.css';
import '../../css/i/i4b55-z0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ugaw_y7eu"/><path class="i4b55-z0q"/></g>`,
		"fallback": "hugeicons:smart-phone-landscape",
	});
}

export default Component;
