import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhr5dqnme.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhr5dqnme"/>`,
		"fallback": "icomoon-free:sphere",
	});
}

export default Component;
