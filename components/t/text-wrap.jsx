import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lf4_2ecrl.css';
import '../../css/y/yfg-5sbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lf4_2ecrl"/><path class="yfg-5sbvd"/></g>`,
		"fallback": "lucide:text-wrap",
	});
}

export default Component;
