import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4f_of1ov.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/a0p-cgb0r.css';
import '../../css/j/jw4a19nsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4f_of1ov"/><g class="xtpeb-edw"><path class="a0p-cgb0r"/><path class="jw4a19nsd"/></g>`,
		"fallback": "solar:walking-bold-duotone",
	});
}

export default Component;
