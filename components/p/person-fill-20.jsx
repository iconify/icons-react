import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz57ce9bu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz57ce9bu"/>`,
		"fallback": "garden:person-fill-20",
	});
}

export default Component;
