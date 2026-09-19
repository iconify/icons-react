import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qc5xsybjn.css';
import '../../css/b/bi-98sy0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qc5xsybjn"/><path class="bi-98sy0o"/></g>`,
		"fallback": "feather:printer",
	});
}

export default Component;
