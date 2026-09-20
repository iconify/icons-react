import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k-m_0bc-f.css';
import '../../css/x/xu5eysboh.css';
import '../../css/j/j_qzpysrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k-m_0bc-f"/><path class="xu5eysboh"/><path class="j_qzpysrk"/></g>`,
		"fallback": "streamline-freehand-color:tape-cassette-1",
	});
}

export default Component;
