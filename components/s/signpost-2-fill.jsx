import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx5hxgbqv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx5hxgbqv"/>`,
		"fallback": "bi:signpost-2-fill",
	});
}

export default Component;
