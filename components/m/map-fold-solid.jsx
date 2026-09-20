import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9hu36b0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v9hu36b0v"/>`,
		"fallback": "streamline:map-fold-solid",
	});
}

export default Component;
