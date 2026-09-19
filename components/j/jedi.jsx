import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm2zggi6m.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm2zggi6m"/>`,
		"fallback": "fa-solid:jedi",
	});
}

export default Component;
