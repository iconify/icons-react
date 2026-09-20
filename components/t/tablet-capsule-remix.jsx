import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkmcn9brz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bkmcn9brz"/>`,
		"fallback": "streamline:tablet-capsule-remix",
	});
}

export default Component;
