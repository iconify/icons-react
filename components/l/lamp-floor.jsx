import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz5l_acvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz5l_acvu"/>`,
		"fallback": "vadivam:lamp-floor",
	});
}

export default Component;
