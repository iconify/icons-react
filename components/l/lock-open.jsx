import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uahd8vp5z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uahd8vp5z"/>`,
		"fallback": "gravity-ui:lock-open",
	});
}

export default Component;
