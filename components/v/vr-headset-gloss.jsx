import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvwtb5uoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvwtb5uoe"/>`,
		"fallback": "withicons:vr-headset-gloss",
	});
}

export default Component;
