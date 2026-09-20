import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd1geldrz.css';
import '../../css/o/oerqs_b1q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd1geldrz"/><path class="oerqs_b1q"/>`,
		"fallback": "oui:users",
	});
}

export default Component;
