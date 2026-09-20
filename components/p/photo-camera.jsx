import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvzcewbdq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvzcewbdq"/>`,
		"fallback": "roentgen:photo-camera",
	});
}

export default Component;
