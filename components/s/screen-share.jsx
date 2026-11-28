import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r99r82azc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r99r82azc"/>`,
		"fallback": "noviair:screen-share",
	});
}

export default Component;
