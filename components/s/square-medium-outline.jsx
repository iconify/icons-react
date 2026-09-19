import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsu2q7bdu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bsu2q7bdu"/>`,
		"fallback": "healthicons:square-medium-outline",
	});
}

export default Component;
