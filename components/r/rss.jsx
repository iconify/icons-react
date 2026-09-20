import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj1vbobrd.css';

const viewBox = {"width":10,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj1vbobrd"/>`,
		"fallback": "octicon:rss",
	});
}

export default Component;
