import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uwjf8rbtq.css';
import '../../css/k/kt2n2bc1q.css';
import '../../css/u/u3a-uq48a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uwjf8rbtq"/><path class="kt2n2bc1q"/><path class="u3a-uq48a"/></g>`,
		"fallback": "glyphs:mallet-duo",
	});
}

export default Component;
