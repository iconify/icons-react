import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um232xbll.css';
import '../../css/k/k77-kcbrm.css';
import '../../css/k/k9qkfnbgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um232xbll"/><path class="k77-kcbrm"/><path class="k9qkfnbgh"/>`,
		"fallback": "energy-icons:text-size-48",
	});
}

export default Component;
