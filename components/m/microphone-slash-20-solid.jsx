import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt4unsb2t.css';
import '../../css/f/fn009esdi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt4unsb2t"/><path class="fn009esdi"/>`,
		"fallback": "sidekickicons:microphone-slash-20-solid",
	});
}

export default Component;
