import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6ctizbcx.css';
import '../../css/m/m8et6-xvo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6ctizbcx"/><path class="m8et6-xvo"/>`,
		"fallback": "selfhst:roundcube-dark",
	});
}

export default Component;
