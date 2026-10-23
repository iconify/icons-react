import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr3rkb2_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr3rkb2_n"/>`,
		"fallback": "vadivam:square-dashed-mouse-pointer",
	});
}

export default Component;
