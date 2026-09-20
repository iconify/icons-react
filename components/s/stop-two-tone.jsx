import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sczqjlb6f.css';
import '../../css/t/t3v7rmpwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sczqjlb6f"/><path class="t3v7rmpwv"/></g>`,
		"fallback": "keyline-icons:stop-two-tone",
	});
}

export default Component;
