import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i_kpawtqq.css';
import '../../css/m/mqtixbwqo.css';
import '../../css/y/y58k7bb-w.css';
import '../../css/l/l0v-b4kbr.css';
import '../../css/c/cke3tihzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="i_kpawtqq"/><path class="mqtixbwqo"/><circle class="y58k7bb-w"/><path class="l0v-b4kbr"/><circle class="cke3tihzk"/></g>`,
		"fallback": "lucide:videotape",
	});
}

export default Component;
