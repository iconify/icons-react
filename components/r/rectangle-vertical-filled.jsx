import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogitdtbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ogitdtbqj"/>`,
		"fallback": "boxicons:rectangle-vertical-filled",
	});
}

export default Component;
