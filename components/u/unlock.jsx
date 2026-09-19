import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1nqo117j.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1nqo117j"/>`,
		"fallback": "topcoat:unlock",
	});
}

export default Component;
