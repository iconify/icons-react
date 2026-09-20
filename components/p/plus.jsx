import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4h6tk3ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="m4h6tk3ds"/>`,
		"fallback": "wordpress:plus",
	});
}

export default Component;
