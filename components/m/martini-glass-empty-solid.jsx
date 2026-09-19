import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdk6vevrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdk6vevrr"/>`,
		"fallback": "flowbite:martini-glass-empty-solid",
	});
}

export default Component;
