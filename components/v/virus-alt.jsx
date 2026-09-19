import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voq30zbfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="voq30zbfc"/>`,
		"fallback": "healthicons:virus-alt",
	});
}

export default Component;
