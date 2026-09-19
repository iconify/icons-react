import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbgu9-blg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vbgu9-blg"/>`,
		"fallback": "healthicons:ppe-face-shield-alt",
	});
}

export default Component;
