import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ejpzf19yv.css';
import '../../css/x/xacbrac1w.css';
import '../../css/s/sjhecfbsi.css';
import '../../css/s/segs2kb4s.css';
import '../../css/x/xh9ldghuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ejpzf19yv"/><path class="xacbrac1w"/><path class="sjhecfbsi"/><path class="segs2kb4s"/><path class="xh9ldghuc"/></g>`,
		"fallback": "streamline-freehand-color:mouse-wireless-1",
	});
}

export default Component;
