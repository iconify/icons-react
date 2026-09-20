import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rc4xfv36q.css';
import '../../css/t/t5pka63op.css';
import '../../css/f/fnmgaj5ib.css';
import '../../css/s/sdm_mab_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rc4xfv36q"/><path class="t5pka63op"/><path class="fnmgaj5ib"/><path class="sdm_mab_v"/></g>`,
		"fallback": "streamline-freehand-color:voice-id-user",
	});
}

export default Component;
