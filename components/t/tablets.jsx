import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvhe_nbhy.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvhe_nbhy"/>`,
		"fallback": "fa-solid:tablets",
	});
}

export default Component;
