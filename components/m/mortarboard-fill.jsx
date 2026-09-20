import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge0c7ebqz.css';
import '../../css/d/dabr2tbbh.css';
import '../../css/j/j5ohattzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge0c7ebqz"/><path clip-rule="evenodd" class="dabr2tbbh"/><path class="j5ohattzn"/>`,
		"fallback": "lets-icons:mortarboard-fill",
	});
}

export default Component;
