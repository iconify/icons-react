import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjzs4ac9c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjzs4ac9c"/>`,
		"fallback": "roentgen:shop-convenience",
	});
}

export default Component;
