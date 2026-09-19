import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cap6jo47k.css';

const viewBox = {"width":1024,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cap6jo47k"/>`,
		"fallback": "whh:piwigo",
	});
}

export default Component;
