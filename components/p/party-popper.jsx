import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy0_5uk2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy0_5uk2g"/>`,
		"fallback": "vadivam:party-popper",
	});
}

export default Component;
