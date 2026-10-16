import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na4jw2bku.css';
import '../../css/k/kchk1uyxs.css';
import '../../css/q/qe_9a6udo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na4jw2bku"/><path class="kchk1uyxs"/><path class="qe_9a6udo"/>`,
		"fallback": "energy-icons:not-gate-20",
	});
}

export default Component;
