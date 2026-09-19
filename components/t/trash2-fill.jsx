import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o72q58bgw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o72q58bgw"/>`,
		"fallback": "bi:trash2-fill",
	});
}

export default Component;
