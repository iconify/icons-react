import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/r/r98uucbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ko6o-6b9b"/><path class="r98uucbml"/></g>`,
		"fallback": "solar:record-audio-circle-broken",
	});
}

export default Component;
