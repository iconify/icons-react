import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/c/c3p148iqt.css';
import '../../css/p/psv7rjbuu.css';
import '../../css/x/x1d-yenwu.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="c3p148iqt"/><path class="psv7rjbuu"/><path class="x1d-yenwu"/>`,
		"fallback": "k8s:volume",
	});
}

export default Component;
