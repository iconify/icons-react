import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l88hrmbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="l88hrmbmc"/>`,
		"fallback": "wordpress:replace",
	});
}

export default Component;
