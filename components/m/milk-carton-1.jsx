import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/omwa91bya.css';
import '../../css/z/ztbefvegq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="omwa91bya"/><path class="ztbefvegq"/></g>`,
		"fallback": "streamline-cyber:milk-carton-1",
	});
}

export default Component;
