import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz529hc7p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz529hc7p"/>`,
		"fallback": "bi:key-fill",
	});
}

export default Component;
