import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vks7r2l6m.css';
import '../../css/b/b_plghb6o.css';
import '../../css/n/nj5w0zwyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vks7r2l6m"/><path class="b_plghb6o"/><path class="nj5w0zwyg"/></g>`,
		"fallback": "streamline-plump:user-switch-account",
	});
}

export default Component;
