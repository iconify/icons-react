import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/digpkxa4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="digpkxa4e"/>`,
		"fallback": "fa-solid:table-tennis",
	});
}

export default Component;
