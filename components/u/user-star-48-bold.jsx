import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x89zfmb8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x89zfmb8d"/>`,
		"fallback": "energy-icons:user-star-48-bold",
	});
}

export default Component;
