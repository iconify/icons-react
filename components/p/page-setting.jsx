import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8g-_obea.css';
import '../../css/f/fag5stbyt.css';
import '../../css/m/mv28fsb2m.css';
import '../../css/l/l0-x1mpyr.css';
import '../../css/o/o07utlbgo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8g-_obea"/><path class="fag5stbyt"/><path class="mv28fsb2m"/><path class="l0-x1mpyr"/><path class="o07utlbgo"/></g>`,
		"fallback": "streamline-flex-color:page-setting",
	});
}

export default Component;
