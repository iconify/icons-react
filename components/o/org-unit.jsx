import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iri4s80tq.css';
import '../../css/j/jfedwfb_m.css';
import '../../css/l/lg562ex1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iri4s80tq"/><path class="jfedwfb_m"/><path class="lg562ex1n"/>`,
		"fallback": "flat-color-icons:org-unit",
	});
}

export default Component;
