import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaw9wkb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="zaw9wkb7l"/>`,
		"fallback": "wordpress:line-dashed",
	});
}

export default Component;
