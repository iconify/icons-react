import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bir3djc_j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bir3djc_j"/>`,
		"fallback": "healthicons:openmrs-logo",
	});
}

export default Component;
