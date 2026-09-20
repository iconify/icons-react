import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4g7kpb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4g7kpb_a"/>`,
		"fallback": "uil:link",
	});
}

export default Component;
