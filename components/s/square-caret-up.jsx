import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so504u5nq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so504u5nq"/>`,
		"fallback": "fa7-regular:square-caret-up",
	});
}

export default Component;
