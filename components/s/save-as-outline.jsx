import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pia9tjb0f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pia9tjb0f"/>`,
		"fallback": "lsicon:save-as-outline",
	});
}

export default Component;
