import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk6fdg-6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="wk6fdg-6w"/>`,
		"fallback": "wordpress:line-solid",
	});
}

export default Component;
