import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xh842pipp.css';
import '../../css/g/gk5oc6_kt.css';
import '../../css/d/dttaamxqn.css';
import '../../css/v/v7o2eiboc.css';
import '../../css/z/z_iswkbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k xh842pipp"/><path class="gk5oc6_kt wm-a"/><path class="dttaamxqn"/><path class="v7o2eiboc"/><path class="wm-s z_iswkbqg"/></g>`,
		"fallback": "withicons-bauhaus:lunar-drum",
	});
}

export default Component;
