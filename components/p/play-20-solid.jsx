import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prw1abc4s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prw1abc4s"/>`,
		"fallback": "heroicons:play-20-solid",
	});
}

export default Component;
