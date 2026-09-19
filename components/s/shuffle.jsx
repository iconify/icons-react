import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl9h3zbgu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl9h3zbgu"/>`,
		"fallback": "icon-park-outline:shuffle",
	});
}

export default Component;
