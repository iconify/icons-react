import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/bufrfgx_w.css';
import '../../css/v/vk38bysgy.css';
import '../../css/h/h1nxzy2nz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="bufrfgx_w"/><path class="vk38bysgy"/><path class="h1nxzy2nz"/></g>`,
		"fallback": "icon-park:light-member",
	});
}

export default Component;
