import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm6d2gqut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm6d2gqut"/>`,
		"fallback": "icon-park-solid:octagon",
	});
}

export default Component;
