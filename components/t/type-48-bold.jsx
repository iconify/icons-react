import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kemulyb_r.css';
import '../../css/x/x-e0pwbux.css';
import '../../css/d/dnwvp9oef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kemulyb_r"/><path class="x-e0pwbux"/><path class="dnwvp9oef"/>`,
		"fallback": "energy-icons:type-48-bold",
	});
}

export default Component;
