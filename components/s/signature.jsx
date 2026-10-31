import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z1gf-w-er.css';
import '../../css/q/qjoi1kboe.css';
import '../../css/s/s0kcf3b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k z1gf-w-er"/><path class="qjoi1kboe wm-a"/><path class="s0kcf3b3u wm-deco"/></g>`,
		"fallback": "withicons-kawaii:signature",
	});
}

export default Component;
