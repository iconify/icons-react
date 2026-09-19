import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zlkmdccij.css';
import '../../css/m/m3vs2vbzx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="zlkmdccij"/><path class="m3vs2vbzx"/></g>`,
		"fallback": "icon-park:ipad",
	});
}

export default Component;
