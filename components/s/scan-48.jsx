import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm5vtyqpe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm5vtyqpe"/>`,
		"fallback": "energy-icons:scan-48",
	});
}

export default Component;
