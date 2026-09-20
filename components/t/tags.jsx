import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa1jqjb_t.css';

const viewBox = {"width":24,"height":24,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa1jqjb_t"/>`,
		"fallback": "jam:tags",
	});
}

export default Component;
