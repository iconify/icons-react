import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sse3loblg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sse3loblg"/>`,
		"fallback": "famicons:reload-circle",
	});
}

export default Component;
