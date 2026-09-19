import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eya7z3bzi.css';
import '../../css/j/j2k31gbuw.css';
import '../../css/r/r4eis3b_r.css';
import '../../css/j/jbneccenu.css';
import '../../css/e/e-vx79gzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="eya7z3bzi"/><path class="j2k31gbuw"/><path class="r4eis3b_r"/><path class="jbneccenu"/><path class="e-vx79gzp"/></g>`,
		"fallback": "icon-park:upload-one",
	});
}

export default Component;
