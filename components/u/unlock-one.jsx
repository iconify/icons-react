import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y6_qflbqc.css';
import '../../css/v/vy-y_jjyw.css';
import '../../css/y/ycelqpu_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="y6_qflbqc"/><path class="vy-y_jjyw"/><path class="ycelqpu_n"/></g>`,
		"fallback": "icon-park:unlock-one",
	});
}

export default Component;
