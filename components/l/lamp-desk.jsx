import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/avllke91y.css';
import '../../css/f/fng_racyg.css';
import '../../css/a/aroqmwbre.css';
import '../../css/t/ti2cc1oum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="avllke91y"/><path class="fng_racyg wm-shine"/><path class="aroqmwbre"/><path class="ti2cc1oum wm-deco"/></g>`,
		"fallback": "withicons-kawaii:lamp-desk",
	});
}

export default Component;
