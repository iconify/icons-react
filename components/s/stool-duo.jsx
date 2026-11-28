import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lidd10bek.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s-3b3ce9i.css';
import '../../css/i/iy-_h6bqy.css';
import '../../css/f/fh4sb3bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lidd10bek secondary"/><g class="dt0cm9dhy primary"><path class="s-3b3ce9i"/><path class="iy-_h6bqy"/><path class="fh4sb3bjp"/></g>`,
		"fallback": "iconaut:stool-duo",
	});
}

export default Component;
