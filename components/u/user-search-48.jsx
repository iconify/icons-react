import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6otzvulu.css';
import '../../css/g/gczovap1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6otzvulu"/><path class="gczovap1t"/>`,
		"fallback": "energy-icons:user-search-48",
	});
}

export default Component;
