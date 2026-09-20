import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzcj2mb1d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzcj2mb1d"/>`,
		"fallback": "vaadin:server",
	});
}

export default Component;
