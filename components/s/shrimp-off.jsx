import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nntiq4wrh.css';
import '../../css/e/eoake_fby.css';
import '../../css/c/cx7nmhbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nntiq4wrh"/><path class="eoake_fby"/><path class="cx7nmhbzv"/></g>`,
		"fallback": "lucide:shrimp-off",
	});
}

export default Component;
