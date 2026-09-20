import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/r8jrw8hsg.css';
import '../../css/s/scicdrbel.css';
import '../../css/c/c9kvrx91k.css';
import '../../css/q/qjlo5db2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="r8jrw8hsg"/><path clip-rule="evenodd" class="scicdrbel"/><path class="c9kvrx91k"/><path class="qjlo5db2v"/></g>`,
		"fallback": "streamline-sharp-color:user-sticker-square",
	});
}

export default Component;
