import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-mt1v02c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-mt1v02c"/>`,
		"fallback": "thesvg-color:openspeedtest",
	});
}

export default Component;
