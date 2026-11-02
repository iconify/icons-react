import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/q9blcg3kq.css';
import '../../css/k/km29vob4w.css';
import '../../css/e/eoev49tcu.css';
import '../../css/k/k8-v8tc6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="q9blcg3kq"/><path class="km29vob4w"/><path class="eoev49tcu"/><path class="k8-v8tc6d"/></g>`,
		"fallback": "matita:user-x",
	});
}

export default Component;
