import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tlyk4acuc.css';
import '../../css/b/bqvda-bch.css';
import '../../css/y/ydj8ci9ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tlyk4acuc"/><path class="bqvda-bch wm-a"/><path class="wm-s ydj8ci9ph"/></g>`,
		"fallback": "withicons:unplug-solid",
	});
}

export default Component;
