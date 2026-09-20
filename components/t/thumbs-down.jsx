import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc8n9fb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="hc8n9fb2d"/>`,
		"fallback": "wordpress:thumbs-down",
	});
}

export default Component;
