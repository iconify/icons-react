import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdq6b-e_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="mdq6b-e_s"/>`,
		"fallback": "wordpress:table-column-before",
	});
}

export default Component;
