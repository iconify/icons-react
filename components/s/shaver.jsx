import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xzh_evzrj.css';
import '../../css/s/s9ldjn-an.css';
import '../../css/e/es5ueib9p.css';
import '../../css/u/u8d3u0wlo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="xzh_evzrj"/><path class="s9ldjn-an"/><path class="es5ueib9p"/><path class="u8d3u0wlo"/></g>`,
		"fallback": "icon-park:shaver",
	});
}

export default Component;
