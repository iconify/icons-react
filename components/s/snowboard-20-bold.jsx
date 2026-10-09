import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6pf78o6u.css';
import '../../css/n/njbgecbdo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6pf78o6u"/><path class="njbgecbdo"/>`,
		"fallback": "energy-icons:snowboard-20-bold",
	});
}

export default Component;
