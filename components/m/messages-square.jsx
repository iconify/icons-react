import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9q4scbtn.css';
import '../../css/k/kzjb2_bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n9q4scbtn"/><path class="kzjb2_bzx"/></g>`,
		"fallback": "hugeicons:messages-square",
	});
}

export default Component;
