import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/ppn7w-u7y.css';
import '../../css/o/odsusfb8n.css';
import '../../css/s/smxyi4bje.css';
import '../../css/z/z275h0bix.css';
import '../../css/s/sh981rb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ppn7w-u7y"/><path class="odsusfb8n wm-s"/><path class="smxyi4bje wm-s"/><path class="z275h0bix"/><path class="sh981rb_o wm-a"/></g>`,
		"fallback": "withicons:kite-duo",
	});
}

export default Component;
