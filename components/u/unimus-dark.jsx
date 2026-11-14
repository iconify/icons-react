import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/botwy-b2l.css';
import '../../css/i/icimvxwqo.css';
import '../../css/j/j9bcembrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="botwy-b2l"/><path class="icimvxwqo"/><path class="j9bcembrm"/>`,
		"fallback": "selfhst:unimus-dark",
	});
}

export default Component;
