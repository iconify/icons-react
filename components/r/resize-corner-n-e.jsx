import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-7ky8bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="s-7ky8bsu"/>`,
		"fallback": "wordpress:resize-corner-n-e",
	});
}

export default Component;
