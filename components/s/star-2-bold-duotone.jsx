import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjpdcd8tl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/o41yu376m.css';
import '../../css/z/zpf651buk.css';
import '../../css/v/vq6hnmb4m.css';
import '../../css/t/tkcb4cb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pjpdcd8tl"/><g class="xtpeb-edw"><path class="o41yu376m"/><path class="zpf651buk"/><path class="vq6hnmb4m"/><path class="tkcb4cb5s"/></g>`,
		"fallback": "solar:star-2-bold-duotone",
	});
}

export default Component;
