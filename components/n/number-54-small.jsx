import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gird6ac5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gird6ac5e"/>`,
		"fallback": "tabler:number-54-small",
	});
}

export default Component;
