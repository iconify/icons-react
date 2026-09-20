import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yovaf8ljk.css';
import '../../css/b/b_ado9bqv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yovaf8ljk"/><path class="b_ado9bqv"/>`,
		"fallback": "vaadin:safe-lock",
	});
}

export default Component;
