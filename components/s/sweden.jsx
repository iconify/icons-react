import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9a76dbze.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9a76dbze"/>`,
		"fallback": "entypo:sweden",
	});
}

export default Component;
