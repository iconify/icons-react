import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loufe_mit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loufe_mit"/>`,
		"fallback": "rivet-icons:shirt-solid",
	});
}

export default Component;
