import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yyaz67b1l.css';
import '../../css/h/hw_2ns8uj.css';
import '../../css/f/fejh84b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="yyaz67b1l"/><path class="hw_2ns8uj wm-k"/><path class="fejh84b-m wm-a"/></g>`,
		"fallback": "withicons:shapes-sketch",
	});
}

export default Component;
