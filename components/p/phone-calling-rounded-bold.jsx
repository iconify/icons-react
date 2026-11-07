import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cquf3bccv.css';
import '../../css/q/qv0degibz.css';
import '../../css/j/jcweppbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cquf3bccv"/><path class="qv0degibz"/><path class="jcweppbdj"/>`,
		"fallback": "solar:phone-calling-rounded-bold",
	});
}

export default Component;
