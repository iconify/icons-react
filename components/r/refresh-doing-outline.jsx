import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivy_7zb5f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivy_7zb5f"/>`,
		"fallback": "lsicon:refresh-doing-outline",
	});
}

export default Component;
