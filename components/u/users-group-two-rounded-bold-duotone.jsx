import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lagukibcz.css';
import '../../css/b/buif742pl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rv8lfbcew.css';
import '../../css/p/piw-45d7x.css';
import '../../css/c/cazy7abfr.css';
import '../../css/y/ydxu9l6jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lagukibcz"/><path class="buif742pl"/><g class="xtpeb-edw"><path class="rv8lfbcew"/><path class="piw-45d7x"/><path class="cazy7abfr"/><path class="ydxu9l6jm"/></g>`,
		"fallback": "solar:users-group-two-rounded-bold-duotone",
	});
}

export default Component;
