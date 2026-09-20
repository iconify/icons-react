import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvf9z4y7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvf9z4y7y"/>`,
		"fallback": "ri:navigation-fill",
	});
}

export default Component;
