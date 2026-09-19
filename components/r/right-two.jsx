import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r360sfbcb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r360sfbcb"/>`,
		"fallback": "icon-park-outline:right-two",
	});
}

export default Component;
