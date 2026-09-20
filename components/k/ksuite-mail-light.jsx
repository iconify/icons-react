import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7agjebmg.css';
import '../../css/q/qr18a0v8s.css';
import '../../css/d/d7fm7dbeo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7agjebmg"/><path class="qr18a0v8s"/><path class="d7fm7dbeo"/>`,
		"fallback": "selfhst:ksuite-mail-light",
	});
}

export default Component;
