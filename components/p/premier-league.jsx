import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pym99p-_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pym99p-_m"/>`,
		"fallback": "thesvg:premier-league",
	});
}

export default Component;
