import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy6ocrb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yy6ocrb8c"/>`,
		"fallback": "streamline-sharp:user-feedback-heart-remix",
	});
}

export default Component;
