import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8l9ejb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="m8l9ejb4a"/>`,
		"fallback": "wordpress:text-vertical",
	});
}

export default Component;
