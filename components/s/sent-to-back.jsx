import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/j/j75_imlry.css';
import '../../css/n/nzmr-vj2k.css';
import '../../css/z/zpuucsaqc.css';
import '../../css/q/q4h48obnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="j75_imlry"/><path class="nzmr-vj2k"/><path class="zpuucsaqc"/><path class="q4h48obnf"/></g>`,
		"fallback": "icon-park-outline:sent-to-back",
	});
}

export default Component;
