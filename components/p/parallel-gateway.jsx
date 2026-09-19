import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z2qxq_b6e.css';
import '../../css/n/n54feq_7f.css';
import '../../css/g/gg07ndbtc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="z2qxq_b6e"/><path class="n54feq_7f"/><path class="gg07ndbtc"/></g>`,
		"fallback": "icon-park:parallel-gateway",
	});
}

export default Component;
