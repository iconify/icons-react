import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r69m7kc5h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r69m7kc5h"/>`,
		"fallback": "bi:pause-btn-fill",
	});
}

export default Component;
