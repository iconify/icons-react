import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltm588bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltm588bsr"/>`,
		"fallback": "thesvg:joomla",
	});
}

export default Component;
