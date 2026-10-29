import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/khy8p4b-y.css';
import '../../css/g/gmzwbacmo.css';
import '../../css/v/v7peg9b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="khy8p4b-y"/><path class="gmzwbacmo wm-k"/><path class="v7peg9b3t wm-a"/></g>`,
		"fallback": "withicons:settings-sketch",
	});
}

export default Component;
