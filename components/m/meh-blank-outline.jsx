import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kg11nj89m.css';
import '../../css/q/qhilh8bcr.css';
import '../../css/k/kiqr8zzyi.css';
import '../../css/n/nzmh0imzu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kg11nj89m"/><path clip-rule="evenodd" class="qhilh8bcr"/><path class="kiqr8zzyi"/><path clip-rule="evenodd" class="nzmh0imzu"/></g>`,
		"fallback": "glyphs:meh-blank-outline",
	});
}

export default Component;
