import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfrb4p-aj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfrb4p-aj"/>`,
		"fallback": "icomoon-free:magnet",
	});
}

export default Component;
