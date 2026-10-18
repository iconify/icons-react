import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlei7i_rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlei7i_rw"/>`,
		"fallback": "vadivam:volume",
	});
}

export default Component;
