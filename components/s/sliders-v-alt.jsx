import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmmqw062e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmmqw062e"/>`,
		"fallback": "uil:sliders-v-alt",
	});
}

export default Component;
