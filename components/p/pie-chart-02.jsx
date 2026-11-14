import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhtg36b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhtg36b7u"/>`,
		"fallback": "hugeicons:pie-chart-02",
	});
}

export default Component;
