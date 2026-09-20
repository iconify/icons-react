import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w33ly4b3u.css';
import '../../css/j/jpdi6m16w.css';
import '../../css/b/byj6lkwkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w33ly4b3u"/><path class="jpdi6m16w"/><path class="byj6lkwkk"/></g>`,
		"fallback": "streamline-cyber-color:medical-cross",
	});
}

export default Component;
