import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrctkuz_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qrctkuz_c"/>`,
		"fallback": "healthicons:lungs-outline",
	});
}

export default Component;
