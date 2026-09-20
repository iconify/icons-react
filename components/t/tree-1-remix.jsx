import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ucprb3o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p7ucprb3o"/>`,
		"fallback": "streamline-plump:tree-1-remix",
	});
}

export default Component;
