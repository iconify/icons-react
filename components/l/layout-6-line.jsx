import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnh_2wb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnh_2wb7g"/>`,
		"fallback": "ri:layout-6-line",
	});
}

export default Component;
