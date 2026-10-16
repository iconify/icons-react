import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kllrszb1h.css';
import '../../css/k/kknmzu6wn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kllrszb1h"/><path class="kknmzu6wn"/>`,
		"fallback": "energy-icons:or-gate-48-bold",
	});
}

export default Component;
