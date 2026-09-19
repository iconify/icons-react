import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzj00tb1e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzj00tb1e"/>`,
		"fallback": "icomoon-free:loop",
	});
}

export default Component;
