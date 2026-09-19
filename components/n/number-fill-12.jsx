import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypg3n3bou.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypg3n3bou"/>`,
		"fallback": "garden:number-fill-12",
	});
}

export default Component;
