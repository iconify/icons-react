import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so7sdacgq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so7sdacgq"/>`,
		"fallback": "streamline:interface-edit-flip-right-design-flip-reflect-right-horizontal",
	});
}

export default Component;
