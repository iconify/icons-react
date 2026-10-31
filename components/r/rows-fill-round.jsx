import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv-1fccnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv-1fccnt"/>`,
		"fallback": "coolicons:rows-fill-round",
	});
}

export default Component;
