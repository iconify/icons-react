import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9zew8b1s.css';

const viewBox = {"width":2560,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9zew8b1s"/>`,
		"fallback": "vs:table-question",
	});
}

export default Component;
