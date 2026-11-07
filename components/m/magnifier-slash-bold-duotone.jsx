import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl66i7bqg.css';
import '../../css/n/n8rwppsqt.css';
import '../../css/w/wrft_xvmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cl66i7bqg"/><path class="n8rwppsqt"/><path class="wrft_xvmr"/>`,
		"fallback": "solar:magnifier-slash-bold-duotone",
	});
}

export default Component;
