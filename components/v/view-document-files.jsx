import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k2ic8-bxv.css';
import '../../css/q/q9nnwmbvy.css';
import '../../css/i/ibebuq93r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k2ic8-bxv"/><path class="q9nnwmbvy"/><path class="ibebuq93r"/></g>`,
		"fallback": "streamline-sharp:view-document-files",
	});
}

export default Component;
