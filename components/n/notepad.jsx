import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz93mysds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz93mysds"/>`,
		"fallback": "bxs:notepad",
	});
}

export default Component;
