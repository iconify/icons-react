import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bcci0pbra.css';
import '../../css/m/mfbnmqh5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="bcci0pbra"/><path class="mfbnmqh5k"/></g>`,
		"fallback": "streamline-cyber:video-meeting-hexagon",
	});
}

export default Component;
