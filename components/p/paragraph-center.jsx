import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljxyob6qz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljxyob6qz"/>`,
		"fallback": "icomoon-free:paragraph-center",
	});
}

export default Component;
