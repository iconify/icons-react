import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v620r637v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v620r637v"/>`,
		"fallback": "streamline-plump:sun-remix",
	});
}

export default Component;
