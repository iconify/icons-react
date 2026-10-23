import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg5qm8m1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg5qm8m1k"/>`,
		"fallback": "vadivam:sword",
	});
}

export default Component;
