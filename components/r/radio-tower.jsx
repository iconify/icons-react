import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hzp9bvryf.css';
import '../../css/u/umnmhib_r.css';
import '../../css/i/iib4vtwgi.css';
import '../../css/g/g9c4kbcfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="hzp9bvryf"/><path class="umnmhib_r wm-k"/><path class="iib4vtwgi wm-a"/><path class="g9c4kbcfl wm-deco"/></g>`,
		"fallback": "withicons-kawaii:radio-tower",
	});
}

export default Component;
