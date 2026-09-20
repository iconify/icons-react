import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzopzya5k.css';
import '../../css/z/zi8fv1mfa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzopzya5k"/><path class="zi8fv1mfa"/>`,
		"fallback": "selfhst:nyt-connections",
	});
}

export default Component;
