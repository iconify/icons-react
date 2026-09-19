import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn5tnnbfu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn5tnnbfu"/>`,
		"fallback": "bi:person-fill-slash",
	});
}

export default Component;
