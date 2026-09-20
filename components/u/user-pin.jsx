import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/ldi7-qxiv.css';
import '../../css/a/a-tlfjbpq.css';
import '../../css/e/e_j74nb0r.css';
import '../../css/q/qb6efabsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ldi7-qxiv"/><path class="a-tlfjbpq"/><path class="e_j74nb0r"/><path class="qb6efabsc"/></g>`,
		"fallback": "streamline-plump-color:user-pin",
	});
}

export default Component;
