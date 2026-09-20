import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbgv9bcsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbgv9bcsv"/>`,
		"fallback": "uil:layer-group-slash",
	});
}

export default Component;
