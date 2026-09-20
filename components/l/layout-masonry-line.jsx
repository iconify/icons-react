import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cisucrfdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cisucrfdz"/>`,
		"fallback": "ri:layout-masonry-line",
	});
}

export default Component;
