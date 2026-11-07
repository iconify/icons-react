import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tz7v5imhp.css';
import '../../css/p/pkvtyac3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tz7v5imhp"/><path class="pkvtyac3k"/></g>`,
		"fallback": "solar:phone-line-duotone",
	});
}

export default Component;
