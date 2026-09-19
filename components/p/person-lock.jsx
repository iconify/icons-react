import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvq6t5a9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvq6t5a9v"/>`,
		"fallback": "bi:person-lock",
	});
}

export default Component;
