import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4fkzxbug.css';
import '../../css/x/xge6mkzpc.css';
import '../../css/v/vb0k3bbvx.css';
import '../../css/q/qiyipmlbn.css';
import '../../css/a/a2kqpsbnd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i4fkzxbug"/><path class="xge6mkzpc"/><path clip-rule="evenodd" class="vb0k3bbvx"/><path class="qiyipmlbn"/><path class="a2kqpsbnd"/></g>`,
		"fallback": "glyphs-poly:walking",
	});
}

export default Component;
