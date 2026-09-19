import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agb1xn7jf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agb1xn7jf"/>`,
		"fallback": "icon-park-outline:vest",
	});
}

export default Component;
