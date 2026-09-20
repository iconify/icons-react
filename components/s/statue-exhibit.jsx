import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr3hgeb1i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr3hgeb1i"/>`,
		"fallback": "roentgen:statue-exhibit",
	});
}

export default Component;
