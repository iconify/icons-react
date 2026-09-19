import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zpx81xb2i.css';
import '../../css/r/ryglj117i.css';
import '../../css/a/af6uu_9jb.css';
import '../../css/m/m6tuhniei.css';
import '../../css/d/dxmr7xahg.css';
import '../../css/c/cud-6eb5s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="zpx81xb2i"/><path class="ryglj117i"/><path class="af6uu_9jb"/><path class="m6tuhniei"/><path class="dxmr7xahg"/><path class="cud-6eb5s"/></g>`,
		"fallback": "icon-park:pyramid-one",
	});
}

export default Component;
