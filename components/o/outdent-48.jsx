import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyc3k4bez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyc3k4bez"/>`,
		"fallback": "energy-icons:outdent-48",
	});
}

export default Component;
