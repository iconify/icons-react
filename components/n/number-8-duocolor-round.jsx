import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr5p_h15c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr5p_h15c"/>`,
		"fallback": "coolicons:number-8-duocolor-round",
	});
}

export default Component;
