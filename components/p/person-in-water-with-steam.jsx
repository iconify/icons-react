import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orqlr3bbs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orqlr3bbs"/>`,
		"fallback": "pinhead:person-in-water-with-steam",
	});
}

export default Component;
