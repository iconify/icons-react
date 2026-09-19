import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwl6l_b8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hwl6l_b8n"/>`,
		"fallback": "healthicons:j-outline",
	});
}

export default Component;
