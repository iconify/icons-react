import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t_1vmguof.css';
import '../../css/n/n4cavdrlx.css';
import '../../css/g/g-385-cio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t_1vmguof"/><path class="n4cavdrlx"/><path class="g-385-cio"/></g>`,
		"fallback": "lucide:package-check",
	});
}

export default Component;
