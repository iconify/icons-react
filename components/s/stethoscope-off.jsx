import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y_kabhbfv.css';
import '../../css/i/i4w-qjy7r.css';
import '../../css/n/nogodz1td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y_kabhbfv"/><path class="i4w-qjy7r"/><path class="nogodz1td"/></g>`,
		"fallback": "tabler:stethoscope-off",
	});
}

export default Component;
