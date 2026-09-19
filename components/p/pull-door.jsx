import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obua1kb7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obua1kb7b"/>`,
		"fallback": "icon-park-outline:pull-door",
	});
}

export default Component;
