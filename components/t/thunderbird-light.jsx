import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4vr_gbmq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4vr_gbmq"/>`,
		"fallback": "selfhst:thunderbird-light",
	});
}

export default Component;
