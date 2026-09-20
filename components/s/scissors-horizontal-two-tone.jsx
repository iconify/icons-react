import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5_43f5jw.css';
import '../../css/q/qsog5gb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t5_43f5jw"/><path class="qsog5gb6i"/></g>`,
		"fallback": "keyline-icons:scissors-horizontal-two-tone",
	});
}

export default Component;
