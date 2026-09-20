import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b82tnpazp.css';
import '../../css/v/v75yc8b7h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b82tnpazp"/><path class="v75yc8b7h"/>`,
		"fallback": "roentgen:needleleaved-tree-bottom-right-horizontal-line",
	});
}

export default Component;
