import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bntg1d--a.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bntg1d--a"/>`,
		"fallback": "el:th-list",
	});
}

export default Component;
