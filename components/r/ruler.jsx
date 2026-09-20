import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq_o_sgle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq_o_sgle"/>`,
		"fallback": "lucide:ruler",
	});
}

export default Component;
