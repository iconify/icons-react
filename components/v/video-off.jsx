import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mg16idnbd.css';
import '../../css/y/ykc7tw7rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mg16idnbd"/><path class="ykc7tw7rc"/></g>`,
		"fallback": "tabler:video-off",
	});
}

export default Component;
