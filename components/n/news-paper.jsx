import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/je4el_bkw.css';
import '../../css/q/qxkf812mh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="je4el_bkw"/><path class="qxkf812mh"/></g>`,
		"fallback": "streamline:news-paper",
	});
}

export default Component;
