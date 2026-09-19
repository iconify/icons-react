import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht_mu-b6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ht_mu-b6r"/>`,
		"fallback": "healthicons:umbrella2x-outline",
	});
}

export default Component;
