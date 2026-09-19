import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe550s3qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe550s3qf"/>`,
		"fallback": "circum:shuffle",
	});
}

export default Component;
