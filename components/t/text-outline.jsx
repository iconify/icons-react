import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icm-ce5fo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icm-ce5fo"/>`,
		"fallback": "lsicon:text-outline",
	});
}

export default Component;
