import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rwjfk2bkk.css';
import '../../css/v/vewolwq6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rwjfk2bkk"/><path class="vewolwq6y"/></g>`,
		"fallback": "streamline-sharp:politics-vote-2",
	});
}

export default Component;
