import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bljn7e6ll.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bljn7e6ll"/>`,
		"fallback": "cib:rss",
	});
}

export default Component;
