import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wk8gzub6u.css';
import '../../css/w/w89_0fcrk.css';
import '../../css/k/k-qmgxbel.css';
import '../../css/i/i5tw7mw9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wk8gzub6u"/><path class="w89_0fcrk"/><path class="k-qmgxbel"/><path class="i5tw7mw9o"/></g>`,
		"fallback": "solar:star-fall-minimalistic-line-duotone",
	});
}

export default Component;
