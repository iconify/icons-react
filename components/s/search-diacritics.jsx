import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7h67eb8m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7h67eb8m"/>`,
		"fallback": "ooui:search-diacritics",
	});
}

export default Component;
