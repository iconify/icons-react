import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhmd9mu1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhmd9mu1g"/>`,
		"fallback": "icon-park-outline:t-shirt",
	});
}

export default Component;
