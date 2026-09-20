import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdk21pi7h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdk21pi7h"/>`,
		"fallback": "nonicons:vim-16",
	});
}

export default Component;
