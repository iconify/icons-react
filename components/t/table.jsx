import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9-e4db2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9-e4db2u"/>`,
		"fallback": "noviair:table",
	});
}

export default Component;
