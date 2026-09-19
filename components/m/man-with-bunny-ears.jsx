import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzi9qoboj.css';
import '../../css/p/phk2qac6e.css';
import '../../css/u/ur23t7x0i.css';
import '../../css/a/a87v13blq.css';
import '../../css/c/cbrj_gbmq.css';
import '../../css/j/jb3u63uud.css';
import '../../css/h/hulfzib6m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzi9qoboj"/><path clip-rule="evenodd" class="phk2qac6e"/><path class="ur23t7x0i"/><path clip-rule="evenodd" class="a87v13blq"/><path class="cbrj_gbmq"/><path class="jb3u63uud"/><path class="hulfzib6m"/>`,
		"fallback": "fluent-emoji-high-contrast:man-with-bunny-ears",
	});
}

export default Component;
