import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj173kefi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gj173kefi"/>`,
		"fallback": "pajamas:rocket-launch",
	});
}

export default Component;
