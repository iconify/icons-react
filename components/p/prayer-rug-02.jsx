import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oyh1zhilo.css';
import '../../css/n/njgedrnok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oyh1zhilo"/><path class="njgedrnok"/></g>`,
		"fallback": "hugeicons:prayer-rug-02",
	});
}

export default Component;
