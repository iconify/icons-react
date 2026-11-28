import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp0hxgdne.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/httbq0c_j.css';
import '../../css/s/s416fdbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp0hxgdne secondary"/><g class="dt0cm9dhy primary"><path class="httbq0c_j"/><path class="s416fdbka"/></g>`,
		"fallback": "iconaut:pilcrow-duo",
	});
}

export default Component;
