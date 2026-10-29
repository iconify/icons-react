import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fv06uk37l.css';
import '../../css/y/ynmfgmb5l.css';
import '../../css/w/w6gybvb-m.css';
import '../../css/x/xzn61yats.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fv06uk37l wm-k"/><path class="ynmfgmb5l"/><path class="w6gybvb-m"/><path class="wm-s xzn61yats"/></g>`,
		"fallback": "withicons-bauhaus:spider",
	});
}

export default Component;
