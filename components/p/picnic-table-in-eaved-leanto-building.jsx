import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2702acas.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2702acas"/>`,
		"fallback": "pinhead:picnic-table-in-eaved-leanto-building",
	});
}

export default Component;
