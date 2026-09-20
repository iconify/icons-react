import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/u/u9a6jzbrc.css';
import '../../css/n/n8dnnbmce.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="u9a6jzbrc"/><path class="n8dnnbmce"/></g>`,
		"fallback": "streamline-kameleon-color:photo-file-2-duo",
	});
}

export default Component;
