import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j19lgvmga.css';
import '../../css/x/xpfcjez-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j19lgvmga"/><path class="xpfcjez-p"/></g>`,
		"fallback": "tabler:settings-key",
	});
}

export default Component;
