import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgnxe6t6b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fgnxe6t6b"/>`,
		"fallback": "streamline-block:other-ui-at",
	});
}

export default Component;
