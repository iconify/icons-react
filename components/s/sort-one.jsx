import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvya9l6dj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvya9l6dj"/>`,
		"fallback": "icon-park-outline:sort-one",
	});
}

export default Component;
