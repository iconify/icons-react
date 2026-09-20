import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/l0kwmqmjd.css';
import '../../css/x/xg567nb4k.css';
import '../../css/u/uyopdksfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="l0kwmqmjd"/><path class="xg567nb4k"/><path class="uyopdksfk"/></g>`,
		"fallback": "streamline-cyber:synchronize-hexagon-2",
	});
}

export default Component;
