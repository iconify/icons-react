import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsp58bb4o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jsp58bb4o"/>`,
		"fallback": "heroicons:radio-16-solid",
	});
}

export default Component;
