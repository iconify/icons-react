import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zu955kafx.css';
import '../../css/j/j_efvl6tx.css';
import '../../css/z/zs843lqwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zu955kafx"/><path class="j_efvl6tx"/><path class="zs843lqwx"/></g>`,
		"fallback": "keyline-icons:octagon-alert-sharp-duotone",
	});
}

export default Component;
