import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrj6w4b_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hrj6w4b_k"/>`,
		"fallback": "healthicons:penis",
	});
}

export default Component;
