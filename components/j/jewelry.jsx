import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/hrq90hfel.css';
import '../../css/s/sn6x_tbwe.css';
import '../../css/y/yqs7h4c2a.css';
import '../../css/o/oge5xob3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="hrq90hfel"/><path class="sn6x_tbwe"/><path class="yqs7h4c2a"/><path class="oge5xob3v"/></g>`,
		"fallback": "icon-park:jewelry",
	});
}

export default Component;
