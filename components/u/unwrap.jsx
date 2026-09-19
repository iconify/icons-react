import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh6h5phkl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh6h5phkl"/>`,
		"fallback": "at-icons:unwrap",
	});
}

export default Component;
