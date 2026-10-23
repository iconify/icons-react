import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/graw_wnsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="graw_wnsb"/>`,
		"fallback": "vadivam:signpost",
	});
}

export default Component;
