import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuedu7c-d.css';
import '../../css/j/j84tewqll.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuedu7c-d"/><path class="j84tewqll"/>`,
		"fallback": "lineicons:question-circle",
	});
}

export default Component;
