import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wygaw9brc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wygaw9brc"/>`,
		"fallback": "ant-design:open-a-i-outlined",
	});
}

export default Component;
