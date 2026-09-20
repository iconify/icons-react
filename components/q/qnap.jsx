import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aymoarswq.css';
import '../../css/e/etmdw1btw.css';
import '../../css/k/ka2hejb0v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aymoarswq"/><path class="etmdw1btw"/><path class="ka2hejb0v"/>`,
		"fallback": "selfhst:qnap",
	});
}

export default Component;
