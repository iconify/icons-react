import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brs95qb5n.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brs95qb5n"/>`,
		"fallback": "thesvg-color:spring",
	});
}

export default Component;
