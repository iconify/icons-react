import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo29c561l.css';
import '../../css/i/iaayajjtm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo29c561l"/><path class="iaayajjtm"/>`,
		"fallback": "selfhst:scryer-dark",
	});
}

export default Component;
