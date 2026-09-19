import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r47ofacoh.css';
import '../../css/k/kya3ihb6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r47ofacoh"/><path class="kya3ihb6q"/>`,
		"fallback": "famicons:thunderstorm",
	});
}

export default Component;
