import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln2cx2igb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln2cx2igb"/>`,
		"fallback": "mynaui:scissors-solid",
	});
}

export default Component;
