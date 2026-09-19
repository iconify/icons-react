import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9tks-8da.css';
import '../../css/f/flesb1b9w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9tks-8da"/><path class="flesb1b9w"/>`,
		"fallback": "icomoon-free:user-plus",
	});
}

export default Component;
