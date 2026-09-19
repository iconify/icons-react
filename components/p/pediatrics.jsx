import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n570r8b3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n570r8b3g"/>`,
		"fallback": "healthicons:pediatrics",
	});
}

export default Component;
