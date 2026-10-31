import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1guqcscz.css';
import '../../css/o/ontwibcre.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1guqcscz"/><path class="ontwibcre"/>`,
		"fallback": "iconito:noodles",
	});
}

export default Component;
