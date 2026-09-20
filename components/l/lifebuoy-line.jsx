import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf2faab1e.css';
import '../../css/h/hevx8wb2o.css';
import '../../css/o/osvywl-4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf2faab1e"/><path class="hevx8wb2o"/><path class="osvywl-4z"/>`,
		"fallback": "mingcute:lifebuoy-line",
	});
}

export default Component;
