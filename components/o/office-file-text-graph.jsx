import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yt-yz9bad.css';
import '../../css/i/it19jcb5q.css';
import '../../css/s/skod2vbuj.css';
import '../../css/e/e-_y97b5b.css';
import '../../css/o/o0s61pf4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yt-yz9bad"/><path class="it19jcb5q"/><path class="skod2vbuj"/><path class="e-_y97b5b"/><path class="o0s61pf4c"/></g>`,
		"fallback": "streamline-freehand-color:office-file-text-graph",
	});
}

export default Component;
