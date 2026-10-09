import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sok4o7bjy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sok4o7bjy"/>`,
		"fallback": "energy-icons:shapes-48-bold",
	});
}

export default Component;
