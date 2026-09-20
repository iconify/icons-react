import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msney2gri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msney2gri"/>`,
		"fallback": "ri:shopping-bag-4-fill",
	});
}

export default Component;
