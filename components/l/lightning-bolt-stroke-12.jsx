import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulu84p6_p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulu84p6_p"/>`,
		"fallback": "garden:lightning-bolt-stroke-12",
	});
}

export default Component;
