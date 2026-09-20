import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woc9o0epe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woc9o0epe"/>`,
		"fallback": "tabler:number-15-small",
	});
}

export default Component;
