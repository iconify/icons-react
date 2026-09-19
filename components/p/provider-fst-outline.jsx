import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6ppj1_bt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w6ppj1_bt"/>`,
		"fallback": "healthicons:provider-fst-outline",
	});
}

export default Component;
