import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmp5eubnr.css';
import '../../css/x/xj2gq3bwa.css';
import '../../css/u/uilqb5bzk.css';
import '../../css/b/bs44wexou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tmp5eubnr"/><path class="xj2gq3bwa"/><circle class="uilqb5bzk"/><path class="bs44wexou"/></g>`,
		"fallback": "andrsrxn:reload-x",
	});
}

export default Component;
