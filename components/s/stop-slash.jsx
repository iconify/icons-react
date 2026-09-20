import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy5nm_b4s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy5nm_b4s"/>`,
		"fallback": "oui:stop-slash",
	});
}

export default Component;
