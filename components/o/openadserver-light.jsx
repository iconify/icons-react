import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_9rqpxcs.css';
import '../../css/z/zc6vvbcxg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_9rqpxcs"/><path class="zc6vvbcxg"/>`,
		"fallback": "selfhst:openadserver-light",
	});
}

export default Component;
