import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d_645y2uz.css';
import '../../css/t/t1453jbbp.css';
import '../../css/o/otuxy881n.css';
import '../../css/h/ht5kuvh2p.css';
import '../../css/c/c5s_8hwcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d_645y2uz"/><path class="t1453jbbp"/><path class="otuxy881n"/><path class="ht5kuvh2p"/><path class="c5s_8hwcb"/></g>`,
		"fallback": "streamline-freehand-color:ui-webpage-slider-cursor",
	});
}

export default Component;
