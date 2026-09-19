import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zegr1dffz.css';
import '../../css/j/j7-kr4q1z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zegr1dffz"/><path clip-rule="evenodd" class="j7-kr4q1z"/>`,
		"fallback": "heroicons:magnifying-glass-minus-16-solid",
	});
}

export default Component;
