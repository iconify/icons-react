import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcv3k0ieq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcv3k0ieq"/>`,
		"fallback": "roentgen:pagoda",
	});
}

export default Component;
