import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/way2m5bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="way2m5bds"/>`,
		"fallback": "wordpress:math",
	});
}

export default Component;
