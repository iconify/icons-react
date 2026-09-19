import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye83ggbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye83ggbjy"/>`,
		"fallback": "griddy-icons:medium",
	});
}

export default Component;
