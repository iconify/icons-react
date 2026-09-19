import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-m60o1rc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-m60o1rc"/>`,
		"fallback": "bi:star-fill",
	});
}

export default Component;
