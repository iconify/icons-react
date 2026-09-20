import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm2ja9gvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm2ja9gvm"/>`,
		"fallback": "ri:layout-masonry-fill",
	});
}

export default Component;
