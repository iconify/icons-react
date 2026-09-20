import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh5nprbqb.css';
import '../../css/r/rcnhk0biq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh5nprbqb"/><path class="rcnhk0biq"/>`,
		"fallback": "selfhst:pomerium-dark",
	});
}

export default Component;
