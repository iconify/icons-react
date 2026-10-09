import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq_b3258o.css';
import '../../css/h/his60jocq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq_b3258o"/><path class="his60jocq"/>`,
		"fallback": "energy-icons:unlock-20-bold",
	});
}

export default Component;
