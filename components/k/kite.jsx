import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z275h0bix.css';
import '../../css/s/sh981rb_o.css';
import '../../css/s/smxyi4bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z275h0bix"/><path class="sh981rb_o wm-a"/><path class="smxyi4bje wm-s"/></g>`,
		"fallback": "withicons:kite",
	});
}

export default Component;
