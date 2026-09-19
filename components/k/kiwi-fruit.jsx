import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7-t8bbmf.css';
import '../../css/j/jn0tw67kj.css';
import '../../css/v/v2mw8xbhk.css';
import '../../css/g/gayh0hbqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p7-t8bbmf"/><path class="jn0tw67kj"/><path class="v2mw8xbhk"/><path class="gayh0hbqt"/></g>`,
		"fallback": "fluent-emoji-flat:kiwi-fruit",
	});
}

export default Component;
