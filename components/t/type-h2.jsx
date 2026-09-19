import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjacrgb5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjacrgb5d"/>`,
		"fallback": "bi:type-h2",
	});
}

export default Component;
