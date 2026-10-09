import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1iqz1-zd.css';
import '../../css/r/r0d7qbcdy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1iqz1-zd"/><path class="r0d7qbcdy"/>`,
		"fallback": "energy-icons:sun-bolt-48-bold",
	});
}

export default Component;
