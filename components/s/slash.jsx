import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k33nyj33x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k33nyj33x"/>`,
		"fallback": "bi:slash",
	});
}

export default Component;
