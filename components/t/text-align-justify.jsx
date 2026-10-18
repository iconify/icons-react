import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvt85_2nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvt85_2nh"/>`,
		"fallback": "vadivam:text-align-justify",
	});
}

export default Component;
