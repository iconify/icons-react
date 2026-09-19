import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lub9q8fhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lub9q8fhx"/>`,
		"fallback": "icon-park-outline:swing",
	});
}

export default Component;
