import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wetsc1b5m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wys62rbgd.css';
import '../../css/p/ptb72kb0a.css';
import '../../css/o/oo4ydnuvq.css';
import '../../css/f/fo0pchbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wetsc1b5m"/><g class="dt0cm9dhy primary"><path class="wys62rbgd"/><path class="ptb72kb0a"/><path class="oo4ydnuvq"/><path class="fo0pchbda"/></g>`,
		"fallback": "iconaut:ribbon-star-duo",
	});
}

export default Component;
