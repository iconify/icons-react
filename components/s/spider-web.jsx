import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/ko4yjcn3s.css';
import '../../css/c/c89s_kb9x.css';
import '../../css/i/ihz715blo.css';
import '../../css/h/h9hqozbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ko4yjcn3s"/><path class="c89s_kb9x"/><path class="ihz715blo"/><path class="h9hqozbfx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:spider-web",
	});
}

export default Component;
