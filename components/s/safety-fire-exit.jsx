import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w-cyxxb1w.css';
import '../../css/q/qjy_z_buh.css';
import '../../css/x/xquh76ahq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w-cyxxb1w"/><path class="qjy_z_buh"/><path class="xquh76ahq"/></g>`,
		"fallback": "streamline-freehand-color:safety-fire-exit",
	});
}

export default Component;
