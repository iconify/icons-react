import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6ldt11qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6ldt11qt"/>`,
		"fallback": "ri:layout-grid-2-fill",
	});
}

export default Component;
