import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qus4oocsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qus4oocsx"/>`,
		"fallback": "coolicons:text-wrap-fill-round",
	});
}

export default Component;
