import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-y-is37i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-y-is37i"/>`,
		"fallback": "tabler:number-18-small",
	});
}

export default Component;
