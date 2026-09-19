import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgmsrisei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgmsrisei"/>`,
		"fallback": "ion:md-pint",
	});
}

export default Component;
