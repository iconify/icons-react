import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjyw_p0_q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjyw_p0_q"/>`,
		"fallback": "bi:skip-backward",
	});
}

export default Component;
