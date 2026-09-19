import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6bbd1bqy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6bbd1bqy"/>`,
		"fallback": "icomoon-free:stop",
	});
}

export default Component;
