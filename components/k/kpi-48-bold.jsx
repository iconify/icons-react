import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/defz0cbcm.css';
import '../../css/n/nh7e1h-bk.css';
import '../../css/u/utldc7bos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="defz0cbcm"/><path class="nh7e1h-bk"/><path class="utldc7bos"/>`,
		"fallback": "energy-icons:kpi-48-bold",
	});
}

export default Component;
