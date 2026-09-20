import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzb8q72ur.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzb8q72ur"/>`,
		"fallback": "roentgen:stone",
	});
}

export default Component;
