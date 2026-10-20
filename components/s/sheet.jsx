import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxwtq5a2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxwtq5a2w"/>`,
		"fallback": "vadivam:sheet",
	});
}

export default Component;
