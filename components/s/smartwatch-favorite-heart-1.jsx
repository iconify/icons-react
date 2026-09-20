import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/dbvdidk1n.css';
import '../../css/u/unoxn64my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="dbvdidk1n"/><path class="unoxn64my"/></g>`,
		"fallback": "streamline-cyber:smartwatch-favorite-heart-1",
	});
}

export default Component;
