import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfl-1pr-y.css';
import '../../css/b/b8fd5ibpr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfl-1pr-y"/><path class="b8fd5ibpr"/>`,
		"fallback": "energy-icons:pool-20",
	});
}

export default Component;
