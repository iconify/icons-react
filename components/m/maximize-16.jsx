import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq_eunbvf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq_eunbvf"/>`,
		"fallback": "octicon:maximize-16",
	});
}

export default Component;
