import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n033gnm-c.css';
import '../../css/w/wyp53z5-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n033gnm-c"/><path class="wyp53z5-u"/></g>`,
		"fallback": "hugeicons:phone-erase",
	});
}

export default Component;
