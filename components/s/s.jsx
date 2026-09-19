import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3vembbjn.css';

const viewBox = {"width":326,"height":671};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3vembbjn"/>`,
		"fallback": "ls:s",
	});
}

export default Component;
