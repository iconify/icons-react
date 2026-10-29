import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp3rtxblz.css';
import '../../css/p/ptltkqbrj.css';
import '../../css/p/p--9hylnq.css';
import '../../css/s/sd-wbxpzj.css';
import '../../css/p/pjss2ktcy.css';
import '../../css/o/ov6m1t4ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mp3rtxblz wm-k"/><path class="ptltkqbrj wm-k"/><path class="p--9hylnq wm-k"/><path class="sd-wbxpzj wm-a"/><path class="pjss2ktcy wm-a"/><path class="ov6m1t4ce wm-a"/></g>`,
		"fallback": "withicons-anime:waves",
	});
}

export default Component;
