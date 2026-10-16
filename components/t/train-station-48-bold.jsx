import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ev-6zgp.css';
import '../../css/c/cpgk2abrw.css';
import '../../css/i/ikk4chbfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ev-6zgp"/><path class="cpgk2abrw"/><path class="ikk4chbfi"/>`,
		"fallback": "energy-icons:train-station-48-bold",
	});
}

export default Component;
