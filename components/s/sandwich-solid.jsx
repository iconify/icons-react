import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaoqke63w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaoqke63w"/>`,
		"fallback": "withicons:sandwich-solid",
	});
}

export default Component;
