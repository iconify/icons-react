import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs5l0aben.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fs5l0aben"/>`,
		"fallback": "streamline-block:other-ui-crown",
	});
}

export default Component;
