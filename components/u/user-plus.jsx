import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbeaf3bzp.css';
import '../../css/i/iik-bbx6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbeaf3bzp"/><path class="iik-bbx6h"/>`,
		"fallback": "stash:user-plus",
	});
}

export default Component;
