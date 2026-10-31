import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/elh4ujh5z.css';
import '../../css/w/wpnud54cj.css';
import '../../css/r/rptzhnlxa.css';
import '../../css/b/b2bgwkbei.css';
import '../../css/n/nn7rqpb2r.css';
import '../../css/g/gpy20etub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="elh4ujh5z wm-shadow"/><path class="wpnud54cj"/><path class="rptzhnlxa"/><path class="b2bgwkbei"/><path class="nn7rqpb2r"/><path class="gpy20etub wm-s"/></g>`,
		"fallback": "withicons-retro:screen-share",
	});
}

export default Component;
