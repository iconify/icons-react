import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mybjy9i_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mybjy9i_v"/>`,
		"fallback": "ix:success",
	});
}

export default Component;
