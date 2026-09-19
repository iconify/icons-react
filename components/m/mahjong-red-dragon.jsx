import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5qjeeb_r.css';
import '../../css/n/ns5h80bhw.css';
import '../../css/v/vy_klyb3d.css';
import '../../css/j/j_-qouind.css';
import '../../css/e/e3nb2wbiz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h5qjeeb_r"/><path class="ns5h80bhw"/><path class="vy_klyb3d"/><rect class="j_-qouind"/><path class="e3nb2wbiz"/></g>`,
		"fallback": "fluent-emoji-flat:mahjong-red-dragon",
	});
}

export default Component;
