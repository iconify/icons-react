import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r9-8m60qe.css';
import '../../css/l/l2e3sbqne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r9-8m60qe"/><path class="l2e3sbqne"/></g>`,
		"fallback": "lucide:mail-minus",
	});
}

export default Component;
