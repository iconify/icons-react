import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/se-p7q76c.css';
import '../../css/z/zq-79zbmc.css';
import '../../css/x/xkbe_rbkg.css';
import '../../css/j/juinc5b_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="se-p7q76c"/><path clip-rule="evenodd" class="zq-79zbmc"/><path class="xkbe_rbkg"/><path class="juinc5b_k"/></g>`,
		"fallback": "streamline-plump-color:voice-typing-word-convert-flat",
	});
}

export default Component;
