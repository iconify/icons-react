import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/u/u5g-e0pir.css';
import '../../css/t/tdhzq11dq.css';
import '../../css/k/k4z7zsbhp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><path class="u5g-e0pir"/><path class="tdhzq11dq"/><circle class="k4z7zsbhp"/>`,
		"fallback": "openmoji:kissing-face",
	});
}

export default Component;
