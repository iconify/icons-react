import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jr03u6bkd.css';
import '../../css/k/kolbtbtpb.css';
import '../../css/u/ux75qqbhr.css';
import '../../css/r/rbcgtacqs.css';
import '../../css/x/x-xizwg2t.css';
import '../../css/s/s2-sr0fdz.css';
import '../../css/f/fsyqg5sob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jr03u6bkd wm-a"/><path class="kolbtbtpb wm-a"/><path class="ux75qqbhr wm-a"/><path class="rbcgtacqs wm-shine"/><path class="wm-a x-xizwg2t"/><path class="s2-sr0fdz wm-a"/><path class="fsyqg5sob wm-a"/></g>`,
		"fallback": "withicons-anime:repeat",
	});
}

export default Component;
