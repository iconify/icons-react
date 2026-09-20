import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkx42b5na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkx42b5na"/>`,
		"fallback": "tabler:number-12-small",
	});
}

export default Component;
