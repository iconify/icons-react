import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/enxsd2b8y.css';
import '../../css/a/a3j-pfb9o.css';
import '../../css/o/ope8r9n2k.css';
import '../../css/x/xjfc-xbtr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="enxsd2b8y"/><path clip-rule="evenodd" class="a3j-pfb9o"/><path class="ope8r9n2k"/><path class="xjfc-xbtr"/></g>`,
		"fallback": "streamline-color:user-circle-single",
	});
}

export default Component;
