import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1xxvtxsv.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/o/oq52ejiws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b1xxvtxsv"/><circle class="h_tsn8bxt"/><path class="oq52ejiws"/></g>`,
		"fallback": "majesticons:money-plus-line",
	});
}

export default Component;
