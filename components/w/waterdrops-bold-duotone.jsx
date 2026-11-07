import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq3ocyl1l.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/hibe8qwor.css';
import '../../css/f/f-wf32bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq3ocyl1l"/><g class="xtpeb-edw"><path class="hibe8qwor"/><path class="f-wf32bmx"/></g>`,
		"fallback": "solar:waterdrops-bold-duotone",
	});
}

export default Component;
