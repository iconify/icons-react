import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feb6apbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feb6apbti"/>`,
		"fallback": "thesvg-color:volvo",
	});
}

export default Component;
