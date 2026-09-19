import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8kqwv81x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8kqwv81x"/>`,
		"fallback": "icon-park-solid:rectangle-small",
	});
}

export default Component;
