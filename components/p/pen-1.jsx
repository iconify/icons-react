import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfgedbwjn.css';
import '../../css/v/vhrjor03s.css';
import '../../css/g/gsf7lhb-b.css';
import '../../css/f/f1d1j93_n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nfgedbwjn"/><path class="vhrjor03s"/><path class="gsf7lhb-b"/><path class="f1d1j93_n"/></g>`,
		"fallback": "streamline-flex-color:pen-1",
	});
}

export default Component;
