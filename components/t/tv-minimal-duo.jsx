import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz-mjf2ti.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wrlcqkbbd.css';
import '../../css/r/rxubgwwby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sz-mjf2ti"/><g class="dt0cm9dhy primary"><path class="wrlcqkbbd"/><path class="rxubgwwby"/></g>`,
		"fallback": "iconaut:tv-minimal-duo",
	});
}

export default Component;
