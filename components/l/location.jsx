import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3_f5bcdb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3_f5bcdb"/>`,
		"fallback": "icomoon-free:location",
	});
}

export default Component;
