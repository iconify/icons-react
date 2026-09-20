import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/n_tei_-1x.css';
import '../../css/c/c52okubxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="n_tei_-1x"/><path class="c52okubxx"/></g>`,
		"fallback": "streamline-cyber:tag-double-1",
	});
}

export default Component;
