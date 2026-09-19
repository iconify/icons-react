import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk4bfj7yl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk4bfj7yl"/>`,
		"fallback": "icomoon-free:shuffle",
	});
}

export default Component;
