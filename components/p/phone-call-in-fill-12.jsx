import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se3k9k9su.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se3k9k9su"/>`,
		"fallback": "garden:phone-call-in-fill-12",
	});
}

export default Component;
