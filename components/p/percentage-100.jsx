import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0e_tfj0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0e_tfj0z"/>`,
		"fallback": "tabler:percentage-100",
	});
}

export default Component;
