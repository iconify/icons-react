import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs-5ptelt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs-5ptelt"/>`,
		"fallback": "f7:person-2-square-stack-fill",
	});
}

export default Component;
