import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lal__dzbo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lal__dzbo"/>`,
		"fallback": "bi:text-right",
	});
}

export default Component;
