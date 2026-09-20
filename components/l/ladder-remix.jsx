import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuby15b-o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vuby15b-o"/>`,
		"fallback": "streamline-plump:ladder-remix",
	});
}

export default Component;
