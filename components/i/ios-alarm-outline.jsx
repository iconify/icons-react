import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wadt5k89n.css';
import '../../css/l/li7_vqt7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wadt5k89n"/><path class="li7_vqt7u"/>`,
		"fallback": "ion:ios-alarm-outline",
	});
}

export default Component;
