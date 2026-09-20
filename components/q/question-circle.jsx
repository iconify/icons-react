import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba7_2s_nj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba7_2s_nj"/>`,
		"fallback": "vaadin:question-circle",
	});
}

export default Component;
