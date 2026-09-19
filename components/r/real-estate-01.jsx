import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b0a7tkekm.css';
import '../../css/b/b946ibi6z.css';
import '../../css/m/mzqewjw4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b0a7tkekm"/><path class="b946ibi6z"/><path class="mzqewjw4a"/></g>`,
		"fallback": "hugeicons:real-estate-01",
	});
}

export default Component;
