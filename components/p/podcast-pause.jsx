import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8hhc1bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8hhc1bqm"/>`,
		"fallback": "noviair:podcast-pause",
	});
}

export default Component;
