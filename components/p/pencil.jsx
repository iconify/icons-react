import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee4nf81dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee4nf81dg"/>`,
		"fallback": "fe:pencil",
	});
}

export default Component;
