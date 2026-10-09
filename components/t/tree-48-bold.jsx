import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br_hr0bcl.css';
import '../../css/g/gka_evgvf.css';
import '../../css/g/gw1hyez2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br_hr0bcl"/><path class="gka_evgvf"/><path class="gw1hyez2s"/>`,
		"fallback": "energy-icons:tree-48-bold",
	});
}

export default Component;
