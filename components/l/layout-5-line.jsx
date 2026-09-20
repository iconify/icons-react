import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyl_y4bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyl_y4bnl"/>`,
		"fallback": "ri:layout-5-line",
	});
}

export default Component;
