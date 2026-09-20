import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/escglxalp.css';
import '../../css/y/ypan3jdtt.css';
import '../../css/j/jqx_c2rwd.css';
import '../../css/g/g5i8c9m-b.css';
import '../../css/f/f03hiugdm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="escglxalp"/><path class="ypan3jdtt"/><path class="jqx_c2rwd"/><path class="g5i8c9m-b"/><path class="f03hiugdm"/></g>`,
		"fallback": "streamline-flex-color:wallet",
	});
}

export default Component;
