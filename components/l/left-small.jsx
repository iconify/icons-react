import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2-2uepmo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2-2uepmo"/>`,
		"fallback": "icon-park-outline:left-small",
	});
}

export default Component;
