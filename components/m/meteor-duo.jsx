import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx09ifbfj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dmlivpbhf.css';
import '../../css/u/uit7n1zka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx09ifbfj secondary"/><g class="dt0cm9dhy primary"><path class="dmlivpbhf"/><path class="uit7n1zka"/></g>`,
		"fallback": "iconaut:meteor-duo",
	});
}

export default Component;
