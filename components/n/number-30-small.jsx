import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouue8ejct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouue8ejct"/>`,
		"fallback": "tabler:number-30-small",
	});
}

export default Component;
