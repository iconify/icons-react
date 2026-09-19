import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thj720svm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thj720svm"/>`,
		"fallback": "icomoon-free:tablet",
	});
}

export default Component;
