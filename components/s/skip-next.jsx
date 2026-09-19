import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwvpkib4q.css';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwvpkib4q"/>`,
		"fallback": "zmdi:skip-next",
	});
}

export default Component;
