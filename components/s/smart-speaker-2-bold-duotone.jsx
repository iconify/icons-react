import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rld7fjmad.css';
import '../../css/d/dj3ck_bbc.css';
import '../../css/q/qca7rbbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="rld7fjmad"/><path class="dj3ck_bbc"/></g><path class="qca7rbbag"/>`,
		"fallback": "solar:smart-speaker-2-bold-duotone",
	});
}

export default Component;
