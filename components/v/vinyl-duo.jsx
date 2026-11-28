import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgv4zmqct.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/o/o6pz2hves.css';
import '../../css/n/nkt1nybhp.css';
import '../../css/l/lidtypbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgv4zmqct secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="o6pz2hves"/><path class="nkt1nybhp"/><path class="lidtypbmg"/></g>`,
		"fallback": "iconaut:vinyl-duo",
	});
}

export default Component;
