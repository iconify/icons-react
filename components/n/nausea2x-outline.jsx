import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqe6q6hbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fqe6q6hbb"/>`,
		"fallback": "healthicons:nausea2x-outline",
	});
}

export default Component;
