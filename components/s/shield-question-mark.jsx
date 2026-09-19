import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ut-nzbcof.css';
import '../../css/r/r8sbv39ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ut-nzbcof"/><path class="r8sbv39ff"/></g>`,
		"fallback": "hugeicons:shield-question-mark",
	});
}

export default Component;
