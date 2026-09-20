import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prstx4uvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prstx4uvm"/>`,
		"fallback": "mynaui:smile-ghost-solid",
	});
}

export default Component;
