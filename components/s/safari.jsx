import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz-_5oksg.css';
import '../../css/n/n9o-95jww.css';
import '../../css/e/e6gjrfbww.css';
import '../../css/j/jridh1bzp.css';
import '../../css/p/pz-6jzb6g.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fcz0i0b6y.css';
import '../../css/c/ckdq6ousu.css';
import '../../css/e/ezqpvpbth.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sz-_5oksg"/><path class="n9o-95jww"/><path class="e6gjrfbww"/><path class="jridh1bzp"/><path class="pz-6jzb6g"/><g class="jn8qy4bru"><path class="fcz0i0b6y"/><path class="ckdq6ousu"/><path class="ezqpvpbth"/></g>`,
		"fallback": "openmoji:safari",
	});
}

export default Component;
