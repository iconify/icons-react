import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2x01abpu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2x01abpu"/>`,
		"fallback": "oui:pin",
	});
}

export default Component;
