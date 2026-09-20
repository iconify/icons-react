import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0e7xv96c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0e7xv96c"/>`,
		"fallback": "streamline-plump:ladder",
	});
}

export default Component;
