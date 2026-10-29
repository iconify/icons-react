import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e-u7ohb3l.css';
import '../../css/n/ny0ftf-0e.css';
import '../../css/t/t4r5p7owk.css';
import '../../css/f/fm-m90lxt.css';
import '../../css/l/ll7svlg2u.css';
import '../../css/d/d-isrd9sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e-u7ohb3l"/><path class="ny0ftf-0e wm-a"/><path class="t4r5p7owk wm-s"/><path class="fm-m90lxt wm-s"/><path class="ll7svlg2u"/><path class="d-isrd9sw wm-a"/></g>`,
		"fallback": "withicons:jingle-bells-duo",
	});
}

export default Component;
