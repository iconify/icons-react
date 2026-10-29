import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdp7v8_-g.css';
import '../../css/g/gtohkybxy.css';
import '../../css/r/rxypl7oqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mdp7v8_-g"/><path class="gtohkybxy wm-a"/><path class="rxypl7oqe"/></g>`,
		"fallback": "withicons:umbrella-duo",
	});
}

export default Component;
