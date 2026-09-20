import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh_ktvqby.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oh_ktvqby"/>`,
		"fallback": "streamline:line-arrow-rotate-left-1-remix",
	});
}

export default Component;
