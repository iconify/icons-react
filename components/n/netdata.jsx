import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8qsyfp5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8qsyfp5n"/>`,
		"fallback": "thesvg:netdata",
	});
}

export default Component;
