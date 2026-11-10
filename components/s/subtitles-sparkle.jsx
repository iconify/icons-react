import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2yhsqbio.css';
import '../../css/h/hzc2ribmh.css';
import '../../css/d/dbh9lwxiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r2yhsqbio"/><path class="hzc2ribmh"/><path class="dbh9lwxiy"/></g>`,
		"fallback": "andrsrxn:subtitles-sparkle",
	});
}

export default Component;
