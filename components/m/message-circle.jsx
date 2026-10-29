import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cubi7abey.css';
import '../../css/x/x99v8ybav.css';
import '../../css/i/iz2h51hrs.css';
import '../../css/f/ffe6717hy.css';
import '../../css/l/lkq-umkya.css';
import '../../css/l/lvtq943uu.css';
import '../../css/l/lqlwayb9u.css';
import '../../css/m/mmyrs99pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cubi7abey wm-shadow"/><path class="x99v8ybav"/><path class="iz2h51hrs"/><path class="ffe6717hy"/><path class="lkq-umkya"/><path class="lvtq943uu wm-shine"/><path class="lqlwayb9u"/><path class="mmyrs99pg"/>`,
		"fallback": "withicons-plush:message-circle",
	});
}

export default Component;
