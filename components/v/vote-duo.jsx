import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz--dybeb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dzkpl7bps.css';
import '../../css/p/p9wysibpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zz--dybeb"/><g class="dt0cm9dhy primary"><path class="dzkpl7bps"/><path class="p9wysibpt"/></g>`,
		"fallback": "iconaut:vote-duo",
	});
}

export default Component;
