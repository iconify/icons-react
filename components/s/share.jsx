import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4fyi_b6k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4fyi_b6k"/>`,
		"fallback": "icomoon-free:share",
	});
}

export default Component;
