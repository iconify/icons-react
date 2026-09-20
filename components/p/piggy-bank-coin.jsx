import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db0of5bxd.css';
import '../../css/n/ndxq0db7y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db0of5bxd"/><path class="ndxq0db7y"/>`,
		"fallback": "vaadin:piggy-bank-coin",
	});
}

export default Component;
