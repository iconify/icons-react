import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq1o1nrlo.css';
import '../../css/l/l4q9q9b8z.css';
import '../../css/n/noghwpwhj.css';
import '../../css/i/i7tjrs9ek.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mq1o1nrlo"/><path class="l4q9q9b8z"/><path clip-rule="evenodd" class="noghwpwhj"/><path class="i7tjrs9ek"/></g>`,
		"fallback": "fluent-emoji-flat:socks",
	});
}

export default Component;
