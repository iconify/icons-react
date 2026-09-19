import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4m9grbzw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4m9grbzw"/>`,
		"fallback": "bi:plus-circle-fill",
	});
}

export default Component;
