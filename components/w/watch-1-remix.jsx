import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_1mxbb1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w_1mxbb1g"/>`,
		"fallback": "streamline-plump:watch-1-remix",
	});
}

export default Component;
