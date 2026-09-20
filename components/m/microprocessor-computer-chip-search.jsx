import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xzb_z2bum.css';
import '../../css/m/m5f5s512t.css';
import '../../css/g/guzqnlbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xzb_z2bum"/><path class="m5f5s512t"/><path class="guzqnlbhl"/></g>`,
		"fallback": "streamline-freehand-color:microprocessor-computer-chip-search",
	});
}

export default Component;
