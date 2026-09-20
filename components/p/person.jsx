import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsb86qbnq.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsb86qbnq"/>`,
		"fallback": "octicon:person",
	});
}

export default Component;
