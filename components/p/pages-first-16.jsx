import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aexl9kfog.css';
import '../../css/k/ka2yvjbbr.css';
import '../../css/n/nduoxyb7i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aexl9kfog"/><path class="ka2yvjbbr"/><path clip-rule="evenodd" class="nduoxyb7i"/>`,
		"fallback": "qlementine-icons:pages-first-16",
	});
}

export default Component;
