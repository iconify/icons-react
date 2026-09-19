import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5rt3cb1x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f5rt3cb1x"/>`,
		"fallback": "healthicons:question-outline",
	});
}

export default Component;
