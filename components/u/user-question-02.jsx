import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghya2pbow.css';
import '../../css/g/g3zrr3xvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ghya2pbow"/><path class="g3zrr3xvi"/></g>`,
		"fallback": "hugeicons:user-question-02",
	});
}

export default Component;
