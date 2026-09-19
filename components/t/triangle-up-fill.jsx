import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do2484mdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do2484mdd"/>`,
		"fallback": "akar-icons:triangle-up-fill",
	});
}

export default Component;
