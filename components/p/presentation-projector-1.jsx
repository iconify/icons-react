import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c85-vrb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c85-vrb9e"/>`,
		"fallback": "streamline-ultimate:presentation-projector-1",
	});
}

export default Component;
