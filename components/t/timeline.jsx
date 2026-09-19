import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge-axlfvq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge-axlfvq"/>`,
		"fallback": "fa6-solid:timeline",
	});
}

export default Component;
