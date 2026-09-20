import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o641qdqhk.css';
import '../../css/b/bjhykb3jv.css';
import '../../css/m/mr2tuebwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o641qdqhk"/><path class="bjhykb3jv"/><path class="mr2tuebwd"/></g>`,
		"fallback": "tdesign:outbox",
	});
}

export default Component;
