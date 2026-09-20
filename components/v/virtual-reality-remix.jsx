import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1o--8zmn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f1o--8zmn"/>`,
		"fallback": "streamline-plump:virtual-reality-remix",
	});
}

export default Component;
