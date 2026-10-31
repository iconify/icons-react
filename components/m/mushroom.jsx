import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g9ymsib5c.css';
import '../../css/b/b3sm3p68z.css';
import '../../css/i/iycs7wjzl.css';
import '../../css/t/tsi5nvbml.css';
import '../../css/l/lisx4xbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="g9ymsib5c"/><path class="b3sm3p68z wm-shine"/><path class="iycs7wjzl wm-k"/><path class="tsi5nvbml wm-a"/><path class="lisx4xbvx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:mushroom",
	});
}

export default Component;
