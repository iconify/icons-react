import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grbq68bib.css';
import '../../css/a/aqu--qbne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grbq68bib"/><path class="aqu--qbne"/>`,
		"fallback": "energy-icons:tent-48",
	});
}

export default Component;
