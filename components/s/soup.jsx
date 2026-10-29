import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wup9xabdg.css';
import '../../css/w/wlwgd_xcs.css';
import '../../css/d/d84faeanp.css';
import '../../css/h/hyiuzhbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a wup9xabdg"/><path class="wlwgd_xcs wm-a"/><path class="d84faeanp wm-k"/><path class="hyiuzhbmd wm-k"/>`,
		"fallback": "withicons-bauhaus:soup",
	});
}

export default Component;
