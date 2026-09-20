import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgn5ezbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgn5ezbfl"/>`,
		"fallback": "stash:smartphone-solid",
	});
}

export default Component;
