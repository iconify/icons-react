import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx30rb9t.css';
import '../../css/j/jzm1kkbyl.css';
import '../../css/t/t938dqb3o.css';
import '../../css/j/jej2n1bzn.css';
import '../../css/f/fbkeuub5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="btx30rb9t"><path class="jzm1kkbyl"/><path class="t938dqb3o"/><path class="jej2n1bzn"/><path class="fbkeuub5d"/></g>`,
		"fallback": "icon-park:rowing",
	});
}

export default Component;
