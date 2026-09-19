import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3nfk9boy.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3nfk9boy"/>`,
		"fallback": "fa6-brands:reacteurope",
	});
}

export default Component;
