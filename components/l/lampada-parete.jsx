import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm_-1ibgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm_-1ibgr"/>`,
		"fallback": "cbi:lampada-parete",
	});
}

export default Component;
