import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8a9mj15s.css';
import '../../css/r/rf0yx6n_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8a9mj15s"/><path class="rf0yx6n_v"/>`,
		"fallback": "selfhst:komodo",
	});
}

export default Component;
