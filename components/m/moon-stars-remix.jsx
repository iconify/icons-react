import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jquahdb3n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jquahdb3n"/>`,
		"fallback": "streamline-plump:moon-stars-remix",
	});
}

export default Component;
