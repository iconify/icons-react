import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ou7daylfg.css';
import '../../css/s/so95n4gpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ou7daylfg"/><path class="so95n4gpp"/></g>`,
		"fallback": "hugeicons:rupee-shield",
	});
}

export default Component;
