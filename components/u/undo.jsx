import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at8qoi4ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="at8qoi4ps"/>`,
		"fallback": "wordpress:undo",
	});
}

export default Component;
