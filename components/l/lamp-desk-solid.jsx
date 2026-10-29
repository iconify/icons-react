import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b01t7_bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b01t7_bpa"/>`,
		"fallback": "withicons:lamp-desk-solid",
	});
}

export default Component;
