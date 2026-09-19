import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylugl128e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylugl128e"/>`,
		"fallback": "icomoon-free:scissors",
	});
}

export default Component;
