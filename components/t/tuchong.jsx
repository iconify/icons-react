import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn55ge7zx.css';
import '../../css/j/ja8cnttar.css';
import '../../css/t/t4xl_0g8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tn55ge7zx"><path class="ja8cnttar"/><path class="t4xl_0g8d"/></g>`,
		"fallback": "icon-park-solid:tuchong",
	});
}

export default Component;
