import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t9ur4hbnu.css';
import '../../css/w/wof3uxb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t9ur4hbnu"/><path class="wof3uxb8d"/></g>`,
		"fallback": "hugeicons:location-update-02",
	});
}

export default Component;
