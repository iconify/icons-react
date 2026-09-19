import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r9phnbbcg.css';
import '../../css/c/cnkdovbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r9phnbbcg"/><path class="cnkdovbhy"/></g>`,
		"fallback": "hugeicons:shellfish",
	});
}

export default Component;
