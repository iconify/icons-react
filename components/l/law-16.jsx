import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2n_s1h7i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2n_s1h7i"/>`,
		"fallback": "octicon:law-16",
	});
}

export default Component;
