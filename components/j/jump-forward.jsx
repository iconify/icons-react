import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/j/jzzx7m_6o.css';
import '../../css/a/avwbqkbxp.css';
import '../../css/e/e8utxjb0v.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="jzzx7m_6o"/><path class="avwbqkbxp"/><path class="e8utxjb0v"/></g>`,
		"fallback": "system-uicons:jump-forward",
	});
}

export default Component;
