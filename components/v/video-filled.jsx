import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awlel4dzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awlel4dzd"/>`,
		"fallback": "reicon:video-filled",
	});
}

export default Component;
