import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfkoaacap.css';
import '../../css/c/c9mbcvbli.css';
import '../../css/g/gziq7pb8t.css';
import '../../css/g/gqkvoyb1b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nfkoaacap"/><path clip-rule="evenodd" class="c9mbcvbli"/><path clip-rule="evenodd" class="gziq7pb8t"/><path class="gqkvoyb1b"/></g>`,
		"fallback": "streamline-color:printer-flat",
	});
}

export default Component;
