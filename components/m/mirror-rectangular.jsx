import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arb_u-b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arb_u-b8c"/>`,
		"fallback": "vadivam:mirror-rectangular",
	});
}

export default Component;
