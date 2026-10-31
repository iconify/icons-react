import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pya37j6aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pya37j6aq"/>`,
		"fallback": "coolicons:number-1-fill-round",
	});
}

export default Component;
