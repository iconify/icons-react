import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo0azpb_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo0azpb_h"/>`,
		"fallback": "heroicons:puzzle-piece-16-solid",
	});
}

export default Component;
