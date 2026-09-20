import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zc4q-sb_r.css';
import '../../css/j/juj9rkxbs.css';
import '../../css/n/nn88d9byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="zc4q-sb_r"/><path class="juj9rkxbs"/><path class="nn88d9byk"/></g>`,
		"fallback": "streamline-cyber:location-pin-1",
	});
}

export default Component;
