import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff3cyt8fk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff3cyt8fk"/>`,
		"fallback": "energy-icons:skateboard-48-bold",
	});
}

export default Component;
