import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9i8s8b5m.css';
import '../../css/c/cnrycxz2k.css';
import '../../css/v/vsni_ovzf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9i8s8b5m"/><path clip-rule="evenodd" class="cnrycxz2k"/><path class="vsni_ovzf"/></g>`,
		"fallback": "streamline-color:store-1-flat",
	});
}

export default Component;
