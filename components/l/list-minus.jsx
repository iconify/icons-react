import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yl7a92tqe.css';
import '../../css/o/okp7pp4nk.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k yl7a92tqe"/><path class="okp7pp4nk wm-s"/><path class="wm-deco yuobg4bux"/></g>`,
		"fallback": "withicons-kawaii:list-minus",
	});
}

export default Component;
