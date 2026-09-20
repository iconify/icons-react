import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjovj6b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="yjovj6b4u"/>`,
		"fallback": "wordpress:list-view",
	});
}

export default Component;
