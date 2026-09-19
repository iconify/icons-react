import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqs77kbnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqs77kbnf"/>`,
		"fallback": "icon-park-outline:open",
	});
}

export default Component;
