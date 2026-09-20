import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tehthnb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tehthnb6g"/>`,
		"fallback": "ri:t-shirt-fill",
	});
}

export default Component;
