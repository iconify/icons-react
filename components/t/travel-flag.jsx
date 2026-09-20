import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz9x-0blp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz9x-0blp"/>`,
		"fallback": "streamline-block:travel-flag",
	});
}

export default Component;
