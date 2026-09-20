import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwio0wbso.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwio0wbso"/>`,
		"fallback": "rivet-icons:question-mark-solid",
	});
}

export default Component;
