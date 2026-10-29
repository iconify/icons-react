import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ll7svlg2u.css';
import '../../css/d/d-isrd9sw.css';
import '../../css/f/fm-m90lxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ll7svlg2u"/><path class="d-isrd9sw wm-a"/><path class="fm-m90lxt wm-s"/></g>`,
		"fallback": "withicons:jingle-bells",
	});
}

export default Component;
