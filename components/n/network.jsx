import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc1aw7qal.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc1aw7qal"/>`,
		"fallback": "entypo:network",
	});
}

export default Component;
