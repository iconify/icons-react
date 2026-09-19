import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaeie20lv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaeie20lv"/>`,
		"fallback": "at-icons:shovel",
	});
}

export default Component;
