import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj9cadb4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj9cadb4g"/>`,
		"fallback": "ion:share",
	});
}

export default Component;
