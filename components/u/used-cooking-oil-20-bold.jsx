import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ammh8jlyd.css';
import '../../css/i/iux9rx_ue.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ammh8jlyd"/><path class="iux9rx_ue"/>`,
		"fallback": "energy-icons:used-cooking-oil-20-bold",
	});
}

export default Component;
