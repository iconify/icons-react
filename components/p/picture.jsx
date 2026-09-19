import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsw5so5pt.css';
import '../../css/t/tm3avkrlq.css';
import '../../css/g/g5s0ynieo.css';
import '../../css/k/ks7wf3l0a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsw5so5pt"/><circle class="tm3avkrlq"/><path class="g5s0ynieo"/><path class="ks7wf3l0a"/>`,
		"fallback": "flat-color-icons:picture",
	});
}

export default Component;
