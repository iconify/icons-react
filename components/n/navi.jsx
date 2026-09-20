import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riyht5b5q.css';
import '../../css/i/iioje8b_g.css';
import '../../css/c/czwbv68iw.css';
import '../../css/d/di0l2xbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riyht5b5q"/><path class="iioje8b_g"/><path class="czwbv68iw"/><path class="di0l2xbsd"/>`,
		"fallback": "token:navi",
	});
}

export default Component;
