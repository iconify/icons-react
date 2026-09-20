import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f_agglgji.css';
import '../../css/q/qlpqn512d.css';
import '../../css/x/x30ge6qtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="f_agglgji"/><path class="qlpqn512d"/><path class="x30ge6qtb"/></g>`,
		"fallback": "streamline-cyber:web-camera",
	});
}

export default Component;
