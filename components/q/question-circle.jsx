import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftpp8ccpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftpp8ccpa"/>`,
		"fallback": "uit:question-circle",
	});
}

export default Component;
