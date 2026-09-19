import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcjsegq-s.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcjsegq-s"/>`,
		"fallback": "fa6-solid:person-walking-dashed-line-arrow-right",
	});
}

export default Component;
