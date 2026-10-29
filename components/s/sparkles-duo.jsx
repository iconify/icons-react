import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qhnvqbbxo.css';
import '../../css/v/veigkmbdy.css';
import '../../css/g/gapblccgm.css';
import '../../css/d/d-i86qbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qhnvqbbxo"/><path class="veigkmbdy wm-a"/><path class="gapblccgm"/><path class="d-i86qbmd wm-a"/></g>`,
		"fallback": "withicons:sparkles-duo",
	});
}

export default Component;
