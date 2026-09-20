import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxwq0k3ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxwq0k3ap"/>`,
		"fallback": "tabler:number-20-small",
	});
}

export default Component;
