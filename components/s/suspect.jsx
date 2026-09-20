import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4-7eu8rv.css';
import '../../css/j/j8qutoidr.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4-7eu8rv"/><path class="j8qutoidr"/>`,
		"fallback": "lineicons:suspect",
	});
}

export default Component;
