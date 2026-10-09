import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9uvctq-c.css';
import '../../css/p/ps4u58b2c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9uvctq-c"/><path class="ps4u58b2c"/>`,
		"fallback": "energy-icons:street-light-48",
	});
}

export default Component;
