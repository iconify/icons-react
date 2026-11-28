import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iic4sds_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iic4sds_n"/>`,
		"fallback": "noviair-light:podium-star",
	});
}

export default Component;
