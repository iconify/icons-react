import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmjeu90su.css';
import '../../css/j/j7-kr4q1z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmjeu90su"/><path clip-rule="evenodd" class="j7-kr4q1z"/>`,
		"fallback": "heroicons:magnifying-glass-plus-16-solid",
	});
}

export default Component;
