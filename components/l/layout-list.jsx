import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jma7f4pkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jma7f4pkg"/>`,
		"fallback": "noviair-light:layout-list",
	});
}

export default Component;
