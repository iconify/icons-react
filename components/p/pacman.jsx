import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/ndx7gob6i.css';
import '../../css/q/qtx-q7b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ndx7gob6i"/><path class="qtx-q7b1u"/></g>`,
		"fallback": "streamline-cyber:pacman",
	});
}

export default Component;
