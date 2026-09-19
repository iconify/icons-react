import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eidiw9bsl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eidiw9bsl"/>`,
		"fallback": "icomoon-free:spinner10",
	});
}

export default Component;
