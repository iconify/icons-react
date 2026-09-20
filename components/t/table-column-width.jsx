import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqd23qb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqd23qb2c"/>`,
		"fallback": "mdi:table-column-width",
	});
}

export default Component;
