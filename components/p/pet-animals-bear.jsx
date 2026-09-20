import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-m9inbky.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-m9inbky"/>`,
		"fallback": "streamline-pixel:pet-animals-bear",
	});
}

export default Component;
