import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hub5-1bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hub5-1bzp"/>`,
		"fallback": "vadivam:trending-up",
	});
}

export default Component;
