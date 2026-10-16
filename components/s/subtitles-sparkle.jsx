import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hdj51abve.css';
import '../../css/d/d79r5fbxq.css';
import '../../css/a/aptiz203n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hdj51abve"/><path class="d79r5fbxq"/><path class="aptiz203n"/></g>`,
		"fallback": "andrsrxn:subtitles-sparkle",
	});
}

export default Component;
