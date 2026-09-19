import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjf41hbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjf41hbye"/>`,
		"fallback": "akar-icons:triangle-right-fill",
	});
}

export default Component;
