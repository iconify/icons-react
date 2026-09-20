import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u4qdtgb-n.css';
import '../../css/b/b5-69v6mq.css';
import '../../css/s/splfu5bpb.css';
import '../../css/i/ibo5l7bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u4qdtgb-n"/><path class="b5-69v6mq"/><path class="splfu5bpb"/><path class="ibo5l7bcs"/></g>`,
		"fallback": "streamline-freehand-color:money-cash-bill-stack",
	});
}

export default Component;
