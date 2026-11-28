import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp8-zubku.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a2mjt-bdb.css';
import '../../css/y/y098b3jed.css';
import '../../css/r/ris9fsb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp8-zubku secondary"/><g class="dt0cm9dhy primary"><path class="a2mjt-bdb"/><path class="y098b3jed"/><path class="ris9fsb6s"/></g>`,
		"fallback": "iconaut:touchpad-duo",
	});
}

export default Component;
