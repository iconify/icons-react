import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqz9skbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqz9skbti"/>`,
		"fallback": "noviair:sliders",
	});
}

export default Component;
