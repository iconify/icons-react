import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivz9d7brs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivz9d7brs"/>`,
		"fallback": "icon-park-solid:sort",
	});
}

export default Component;
