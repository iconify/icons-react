import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j645jhbza.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gjdm3pbxq.css';
import '../../css/w/wryprvbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j645jhbza"/><g class="xtpeb-edw"><path class="gjdm3pbxq"/><path class="wryprvbkm"/></g>`,
		"fallback": "solar:quit-full-screen-bold-duotone",
	});
}

export default Component;
