import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cogyhpbeg.css';
import '../../css/f/fa6cet7bu.css';
import '../../css/v/vvehkvu_h.css';
import '../../css/x/x_g42obzo.css';
import '../../css/q/qt9lwjbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cogyhpbeg wm-k"/><path class="fa6cet7bu wm-k"/><path class="vvehkvu_h wm-a"/><path class="wm-k x_g42obzo"/><path class="qt9lwjbfz wm-a"/>`,
		"fallback": "withicons-bauhaus:person-running",
	});
}

export default Component;
