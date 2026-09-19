import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqi4ufqbo.css';
import '../../css/y/ylqfvzsqq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqi4ufqbo"/><path class="ylqfvzsqq"/>`,
		"fallback": "famicons:nutrition-sharp",
	});
}

export default Component;
