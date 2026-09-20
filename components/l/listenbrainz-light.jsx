import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh-smq3-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh-smq3-l"/>`,
		"fallback": "selfhst:listenbrainz-light",
	});
}

export default Component;
