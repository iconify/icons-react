import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afz92zvrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afz92zvrw"/>`,
		"fallback": "mingcute:list-start-fill",
	});
}

export default Component;
