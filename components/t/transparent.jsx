import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/ju-031bnu.css';
import '../../css/m/ml_l7u_yh.css';
import '../../css/x/x_tmd2c4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ju-031bnu"/><path class="ml_l7u_yh"/><path class="x_tmd2c4q"/></g>`,
		"fallback": "streamline-plump:transparent",
	});
}

export default Component;
