import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi8qeub9j.css';
import '../../css/g/gzw_lcbat.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi8qeub9j"/><path class="gzw_lcbat"/>`,
		"fallback": "ion:ios-cafe",
	});
}

export default Component;
