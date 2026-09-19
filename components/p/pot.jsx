import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/grtthcc5h.css';
import '../../css/j/jfolg-bwm.css';
import '../../css/o/othrsr8wy.css';
import '../../css/q/qidfz-bii.css';
import '../../css/u/uq3yw2nln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="grtthcc5h"/><path class="jfolg-bwm"/><path class="othrsr8wy"/><path class="qidfz-bii"/><path class="uq3yw2nln"/></g>`,
		"fallback": "icon-park:pot",
	});
}

export default Component;
