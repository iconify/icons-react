import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzb533b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzb533b_l"/>`,
		"fallback": "cbi:packeta",
	});
}

export default Component;
