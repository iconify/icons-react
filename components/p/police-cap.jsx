import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vqclyacqa.css';
import '../../css/d/dak0hk3_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vqclyacqa"/><path class="dak0hk3_l"/></g>`,
		"fallback": "hugeicons:police-cap",
	});
}

export default Component;
