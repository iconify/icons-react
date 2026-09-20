import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxa_0plyt.css';
import '../../css/z/zjbi_bcza.css';
import '../../css/a/aqasqsbwy.css';
import '../../css/q/qn-i0bkas.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vxa_0plyt"/><path class="zjbi_bcza"/><path class="aqasqsbwy"/><path class="qn-i0bkas"/></g>`,
		"fallback": "streamline-color:invisible-1",
	});
}

export default Component;
