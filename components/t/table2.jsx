import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb3xt4key.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb3xt4key"/>`,
		"fallback": "icomoon-free:table2",
	});
}

export default Component;
