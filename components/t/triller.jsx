import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rds309iqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rds309iqp"/>`,
		"fallback": "simple-icons:triller",
	});
}

export default Component;
