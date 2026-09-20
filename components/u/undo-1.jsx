import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox3ovf3vo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox3ovf3vo"/>`,
		"fallback": "subway:undo-1",
	});
}

export default Component;
