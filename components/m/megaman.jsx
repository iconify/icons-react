import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xnul25b-j.css';
import '../../css/a/ag13e5bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="xnul25b-j"/><path class="ag13e5bht"/></g>`,
		"fallback": "streamline-cyber:megaman",
	});
}

export default Component;
