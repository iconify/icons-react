import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svz5apblp.css';
import '../../css/s/sk_7s2z0a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svz5apblp"/><path class="sk_7s2z0a"/>`,
		"fallback": "vaadin:presentation",
	});
}

export default Component;
