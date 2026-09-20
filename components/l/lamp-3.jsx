import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f6tqcpbyl.css';
import '../../css/b/buv-ombri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="f6tqcpbyl"/><path class="buv-ombri"/></g>`,
		"fallback": "streamline-cyber:lamp-3",
	});
}

export default Component;
