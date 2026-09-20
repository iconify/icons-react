import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akqouxm0s.css';
import '../../css/i/iz4-9bcxw.css';
import '../../css/k/kvfbqsbck.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akqouxm0s"/><path class="iz4-9bcxw"/><path class="kvfbqsbck"/>`,
		"fallback": "selfhst:plex-dash",
	});
}

export default Component;
