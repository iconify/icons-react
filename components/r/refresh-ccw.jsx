import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or769vbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or769vbrc"/>`,
		"fallback": "vadivam:refresh-ccw",
	});
}

export default Component;
