import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l29l-5dzo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vqntw0b8l.css';
import '../../css/o/or41fg4zb.css';
import '../../css/y/ym2hmp47k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l29l-5dzo secondary"/><g class="dt0cm9dhy primary"><path class="vqntw0b8l"/><path class="or41fg4zb"/><path class="ym2hmp47k"/></g>`,
		"fallback": "iconaut:mail-shield-duo",
	});
}

export default Component;
