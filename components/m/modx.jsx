import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6qtdccyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6qtdccyd"/>`,
		"fallback": "simple-icons:modx",
	});
}

export default Component;
