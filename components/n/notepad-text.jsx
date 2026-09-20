import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iaj-w6hom.css';
import '../../css/y/yxrtfmbgr.css';
import '../../css/y/y8y0tmbno.css';
import '../../css/k/kktqh6gzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="iaj-w6hom"/><path class="yxrtfmbgr"/><path class="y8y0tmbno"/><path class="kktqh6gzb"/></g>`,
		"fallback": "streamline-plump-color:notepad-text",
	});
}

export default Component;
