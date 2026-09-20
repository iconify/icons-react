import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m_s4vf09q.css';
import '../../css/x/xust17bnz.css';
import '../../css/s/sphoe-x3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m_s4vf09q"/><path class="xust17bnz"/><path class="sphoe-x3l"/></g>`,
		"fallback": "streamline-freehand-color:saving-wallet-international",
	});
}

export default Component;
