import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnkee_b2v.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnkee_b2v"/>`,
		"fallback": "fa-solid:menorah",
	});
}

export default Component;
