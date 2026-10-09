import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btko0yb2v.css';
import '../../css/d/dhkiq4b-h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btko0yb2v"/><path class="dhkiq4b-h"/>`,
		"fallback": "energy-icons:nacelle-48-bold",
	});
}

export default Component;
