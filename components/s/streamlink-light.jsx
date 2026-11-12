import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvv0o5bfo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvv0o5bfo"/>`,
		"fallback": "selfhst:streamlink-light",
	});
}

export default Component;
