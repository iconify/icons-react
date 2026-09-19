import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpzch7b1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cpzch7b1t"/>`,
		"fallback": "healthicons:pill-1",
	});
}

export default Component;
