import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li-jbvb_p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li-jbvb_p"/>`,
		"fallback": "vaadin:scale-unbalance",
	});
}

export default Component;
