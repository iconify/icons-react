import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zsgcdmb6z.css';
import '../../css/z/z8pfvfbgm.css';
import '../../css/a/a8l0d-blg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="zsgcdmb6z"/><path class="z8pfvfbgm"/><path class="a8l0d-blg"/></g>`,
		"fallback": "doodle-icons:skull",
	});
}

export default Component;
