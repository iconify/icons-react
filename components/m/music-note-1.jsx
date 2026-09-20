import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fztf4_b3u.css';
import '../../css/z/zrzfwr93i.css';
import '../../css/h/hk6l5t8db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fztf4_b3u"/><path class="zrzfwr93i"/><path class="hk6l5t8db"/></g>`,
		"fallback": "streamline-ultimate-color:music-note-1",
	});
}

export default Component;
