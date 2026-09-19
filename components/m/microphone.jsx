import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uyiftqbnc.css';
import '../../css/q/qj9ejwyor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="uyiftqbnc"/><path class="qj9ejwyor"/></g>`,
		"fallback": "akar-icons:microphone",
	});
}

export default Component;
