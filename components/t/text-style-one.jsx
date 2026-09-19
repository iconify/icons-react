import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvbo2fx7l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvbo2fx7l"/>`,
		"fallback": "icon-park-outline:text-style-one",
	});
}

export default Component;
