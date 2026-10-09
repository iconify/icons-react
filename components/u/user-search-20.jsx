import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd353pbda.css';
import '../../css/a/ad6ngxjuf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd353pbda"/><path class="ad6ngxjuf"/>`,
		"fallback": "energy-icons:user-search-20",
	});
}

export default Component;
