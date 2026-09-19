import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6au-ssag.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6au-ssag"/>`,
		"fallback": "icon-park-outline:pay-code-one",
	});
}

export default Component;
