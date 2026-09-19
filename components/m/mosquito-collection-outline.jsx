import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g82dpbb4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g82dpbb4h"/>`,
		"fallback": "healthicons:mosquito-collection-outline",
	});
}

export default Component;
