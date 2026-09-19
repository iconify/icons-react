import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a87ho47qt.css';
import '../../css/v/vst-zynlr.css';
import '../../css/o/oj9nw4-tl.css';
import '../../css/t/tkyzv7u3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a87ho47qt"/><path class="vst-zynlr"/><path class="oj9nw4-tl"/><path class="tkyzv7u3m"/>`,
		"fallback": "gcp:network-security",
	});
}

export default Component;
