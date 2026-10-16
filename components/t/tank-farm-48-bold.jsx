import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5b617bur.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5b617bur"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:tank-farm-48-bold",
	});
}

export default Component;
