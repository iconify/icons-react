import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eym7bl_re.css';
import '../../css/t/tay61hbyz.css';
import '../../css/f/f4vx4ccga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="eym7bl_re"/><path class="tay61hbyz"/><path class="f4vx4ccga"/></g>`,
		"fallback": "keyline-icons:monitor-off-sharp-duotone",
	});
}

export default Component;
