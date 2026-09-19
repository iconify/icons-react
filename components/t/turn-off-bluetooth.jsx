import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/ug3yyhc4i.css';
import '../../css/c/cs90qrjjg.css';
import '../../css/l/ljgcpcuxn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ug3yyhc4i"/><path class="cs90qrjjg"/><path class="ljgcpcuxn"/></g>`,
		"fallback": "icon-park-outline:turn-off-bluetooth",
	});
}

export default Component;
