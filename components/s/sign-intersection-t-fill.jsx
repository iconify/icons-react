import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea13a9b2o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea13a9b2o"/>`,
		"fallback": "bi:sign-intersection-t-fill",
	});
}

export default Component;
