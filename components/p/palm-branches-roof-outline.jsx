import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9sgzxuyy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f9sgzxuyy"/>`,
		"fallback": "healthicons:palm-branches-roof-outline",
	});
}

export default Component;
