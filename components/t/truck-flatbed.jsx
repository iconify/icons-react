import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxm1hb9p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrxm1hb9p"/>`,
		"fallback": "bi:truck-flatbed",
	});
}

export default Component;
