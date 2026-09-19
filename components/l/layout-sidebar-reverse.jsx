import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwwk4dnck.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwwk4dnck"/>`,
		"fallback": "bi:layout-sidebar-reverse",
	});
}

export default Component;
