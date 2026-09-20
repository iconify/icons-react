import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_wdvtgci.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_wdvtgci"/>`,
		"fallback": "roentgen:t-shirt",
	});
}

export default Component;
