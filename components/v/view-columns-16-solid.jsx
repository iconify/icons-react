import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lksonub4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lksonub4r"/>`,
		"fallback": "heroicons:view-columns-16-solid",
	});
}

export default Component;
