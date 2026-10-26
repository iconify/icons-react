import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk33ibcgv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk33ibcgv"/>`,
		"fallback": "thesvg:kserve",
	});
}

export default Component;
