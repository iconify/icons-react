import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib3aw7l4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ib3aw7l4o"/>`,
		"fallback": "streamline-plump:keyboard-remix",
	});
}

export default Component;
