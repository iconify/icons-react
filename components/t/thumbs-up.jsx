import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfoc4ibca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="sfoc4ibca"/>`,
		"fallback": "wordpress:thumbs-up",
	});
}

export default Component;
