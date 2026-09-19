import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncjstd5lp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncjstd5lp"/>`,
		"fallback": "cib:topcoder",
	});
}

export default Component;
