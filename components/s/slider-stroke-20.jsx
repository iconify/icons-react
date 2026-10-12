import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1zk_dbup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1zk_dbup"/>`,
		"fallback": "garden:slider-stroke-20",
	});
}

export default Component;
