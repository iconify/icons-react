import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlwjertog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlwjertog"/>`,
		"fallback": "roentgen:townhall",
	});
}

export default Component;
