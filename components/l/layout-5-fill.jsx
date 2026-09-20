import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8afojbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8afojbdv"/>`,
		"fallback": "ri:layout-5-fill",
	});
}

export default Component;
