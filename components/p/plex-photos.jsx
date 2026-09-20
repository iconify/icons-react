import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akqouxm0s.css';
import '../../css/n/nscyqnbmh.css';
import '../../css/a/axmh90bqa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akqouxm0s"/><path class="nscyqnbmh"/><path class="axmh90bqa"/>`,
		"fallback": "selfhst:plex-photos",
	});
}

export default Component;
