import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3i4_qb9m.css';
import '../../css/a/a23i8nphm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3i4_qb9m"/><path class="a23i8nphm"/>`,
		"fallback": "fxemoji:nobicycles",
	});
}

export default Component;
